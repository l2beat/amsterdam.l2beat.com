const child_process = require('child_process')
const crypto = require('crypto')
const del = require('del')
const express = require('express')
const fs = require('fs')
const gulp = require('gulp')
const path = require('path')

async function clean() {
  await del('build')
  await fs.promises.mkdir('build')
}

function buildScripts() {
  return exec(
    `esbuild --bundle src/scripts/main.ts --outfile=build/static/scripts/main.js --minify`
  )
}

function watchScripts() {
  return gulp.watch('src/scripts/**/*.ts', buildScripts)
}

function buildStyles() {
  return Promise.resolve()
}

function watchStyles() {
  return gulp.watch('src/styles/**/*.scss', buildStyles)
}

function copyStatic() {
  return gulp.src('src/static/**/*').pipe(gulp.dest('build/static'))
}

function watchStatic() {
  return gulp.watch('src/static/**/*', copyStatic)
}

function buildPages() {
  return exec(`node -r esbuild-register src/pages/index.ts`)
}

function watchPages() {
  return gulp.watch('src/pages/**/*.ts', buildPages)
}

async function hashStaticFiles() {
  const manifest = await addHashes('build/static')
  await fs.promises.writeFile(
    'build/manifest.json',
    JSON.stringify(manifest, null, 2)
  )
}

async function makeEmptyManifest() {
  await fs.promises.writeFile(
    'build/manifest.json',
    JSON.stringify({}, null, 2)
  )
}

function serve() {
  const app = express()
  app.use(express.static('build'))
  const server = app.listen(8080, '0.0.0.0')
  console.log('Listening on http://localhost:8080')
  return server
}

const build = gulp.series(
  clean,
  makeEmptyManifest,
  gulp.parallel(buildScripts, buildStyles, buildPages, copyStatic),
  hashStaticFiles
)

const watch = gulp.series(
  clean,
  makeEmptyManifest,
  gulp.parallel(buildScripts, buildStyles, buildPages, copyStatic),
  gulp.parallel(watchScripts, watchStyles, watchPages, watchStatic, serve)
)

module.exports = {
  clean,
  watch,
  build,
}

// Utilities

async function addHashes(dir, base = '/') {
  const items = await fs.promises.readdir(dir)
  let manifest = {}
  for (const item of items) {
    const fullName = path.join(dir, item)
    if (fs.statSync(fullName).isDirectory()) {
      const updates = await addHashes(fullName, path.join(base, item))
      manifest = { ...manifest, ...updates }
    } else {
      const hash = (await sha256(fullName)).slice(0, 8)
      const { name, ext } = path.parse(item)
      const itemWithHash = `${name}.${hash}${ext}`
      await fs.promises.rename(fullName, path.join(dir, itemWithHash))
      manifest[path.join(base, item)] = path.join(base, itemWithHash)
    }
  }
  return manifest
}

async function sha256(file) {
  const fd = fs.createReadStream(file)
  const hash = crypto.createHash('sha256')
  hash.setEncoding('hex')
  return new Promise((resolve) => {
    fd.on('end', function () {
      hash.end()
      resolve(hash.read())
    })
    fd.pipe(hash)
  })
}

function exec(command) {
  const nodeModulesHere = path.join(__dirname, './node_modules/.bin')
  const nodeModulesUp = path.join(__dirname, '../node_modules/.bin')
  const PATH = `${nodeModulesHere}:${nodeModulesUp}:${process.env.PATH}`
  const [name, ...args] = parseCommand(command)
  const cp = child_process.spawn(name, args, {
    env: { ...process.env, PATH },
    stdio: 'inherit',
  })
  return new Promise((resolve, reject) => {
    cp.on('error', reject)
    cp.on('exit', (code) => (code !== 0 ? reject(code) : resolve()))
  })
}

function parseCommand(text) {
  const SURROUNDED = /^"[^"]*"$/
  const NOT_SURROUNDED = /^([^"]|[^"].*?[^"])$/

  let args = []
  let argPart = ''

  for (const arg of text.split(' ')) {
    if ((SURROUNDED.test(arg) || NOT_SURROUNDED.test(arg)) && !argPart) {
      args.push(arg)
    } else {
      argPart = argPart ? argPart + ' ' + arg : arg
      if (argPart.endsWith('"')) {
        args.push(argPart.slice(1, -1))
        argPart = ''
      }
    }
  }

  return args
}

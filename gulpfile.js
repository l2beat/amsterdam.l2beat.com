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
    `esbuild --bundle src/scripts/main.ts --outfile=build/scripts/main.js --minify`
  )
}

function watchScripts() {
  return gulp.watch('src/scripts/**/*.ts', buildScripts)
}

function buildStyles() {
  return exec(
    `tailwindcss -i ./src/styles/style.css -o ./build/styles/style.css`
  )
}

function watchStyles() {
  return gulp.watch('src/**/*.{css,ts,tsx}', buildStyles)
}

function copyStatic() {
  return gulp.src('src/static/**/*').pipe(gulp.dest('build'))
}

function watchStatic() {
  return gulp.watch('src/static/**/*', copyStatic)
}

function buildPages() {
  return exec(`node -r esbuild-register src/pages/index.ts`)
}

function watchPages() {
  return gulp.watch('src/pages/**/*.{ts,tsx,json}', buildPages)
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
  gulp.parallel(buildScripts, buildStyles, buildPages, copyStatic)
)

const watch = gulp.series(
  build,
  gulp.parallel(watchScripts, watchStyles, watchPages, watchStatic, serve)
)

module.exports = {
  clean,
  watch,
  build,
}

// Utilities

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

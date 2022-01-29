import fsx from 'fs-extra'
import path from 'path'

export function outputPages(pages: { slug: string; page: string }[]) {
  for (const { slug, page } of pages) {
    fsx.mkdirpSync(path.join('build', slug))
    fsx.writeFileSync(path.join('build', slug, 'index.html'), page)
  }
}

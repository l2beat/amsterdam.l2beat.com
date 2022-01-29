import { renderHomePage } from './home'
import { outputPages } from './output'

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

async function main() {
  const pages = [renderHomePage()]
  outputPages(pages)
}

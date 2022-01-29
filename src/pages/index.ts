import { outputPages } from './output'
import { pages } from './pages'

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

async function main() {
  outputPages(pages)
}

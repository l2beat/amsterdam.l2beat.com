import { agenda } from './data/agenda'
import { renderHomePage } from './home'
import { outputPages } from './output'
import { renderTrack } from './tracks'

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

async function main() {
  const pages = [
    renderHomePage(),
    ...agenda.map((track, i) => renderTrack({ id: i + 1, track })),
  ]
  outputPages(pages)
}

import { timedItems } from './timedItems'

function updateLiveBadge() {
  const badges = document.querySelectorAll('[data-live-badge]')
  badges.forEach((x) => x.remove())

  const now = Date.now()
  for (const item of timedItems) {
    if (item.start.getTime() < now && item.end.getTime() >= now) {
      const cell = document.querySelector(
        `#agenda-table tr:nth-child(${item.row + 1}) td:nth-child(3)`
      )
      if (!cell) {
        continue
      }
      const wrapper = document.createElement('span')
      wrapper.dataset.liveBadge = 'true'
      const child = document.createElement('span')
      child.className = 'uppercase px-2 py-0.5 bg-red text-pure'
      child.innerHTML = 'live'
      wrapper.appendChild(child)
      wrapper.appendChild(document.createTextNode(' '))
      cell.prepend(wrapper)
      console.log('Live', item)
    }
  }
}

export function initLiveBadge() {
  updateLiveBadge()
  setInterval(updateLiveBadge, 10_000)
}

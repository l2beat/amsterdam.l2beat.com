import agenda from '../pages/data/agenda.json'

interface TimedItem {
  start: Date
  end: Date
  row: number
  type: string
  speakers?: string[]
  company?: string
  title: string
}

const timedItems: TimedItem[] = []
let row = 0
for (const day of agenda) {
  row += 2
  for (const item of day.items) {
    const start = new Date(`${day.date}T${item.start}:00+02:00`)
    const end = new Date(`${day.date}T${item.end}:00+02:00`)
    if (
      item.type !== 'break' &&
      item.type !== 'check-in' &&
      item.type !== 'party'
    ) {
      timedItems.push({ ...item, start, end, row })
    }
    row += 1
  }
}

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
      child.innerHTML = 'Live now'
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

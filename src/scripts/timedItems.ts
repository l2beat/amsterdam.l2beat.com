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
    if (item.type !== 'break' && item.type !== 'check-in') {
      timedItems.push({ ...item, start, end, row })
    }
    row += 1
  }
}

export { timedItems }

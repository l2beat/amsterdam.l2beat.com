import fs from 'fs'

import { agenda } from './agenda'
import { speakers } from './speakers'

interface StreamingEntry {
  id: string
  title: string
  abstract?: string
  description?: string
  track?: string
  type?: string
  room?: string
  start: string
  end: string
  speakers: Speaker[]
}

interface Speaker {
  name: string
  role?: string
  bio?: string
}

const day1: StreamingEntry[] = []
const day2: StreamingEntry[] = []

for (const track of agenda) {
  if (track.name === 'Day 2 - Workshops & Discussions') {
    continue
  }
  const target = track.date === '2022-04-19' ? day1 : day2
  for (const item of track.items) {
    const start = `${track.date}T${item.start}:00+02:00`
    const end = `${track.date}T${item.end}:00+02:00`

    const names: string[] = []
    if (item.type === 'talk' || item.type === 'workshop') {
      names.push(...item.speakers)
    } else if (item.type === 'panel') {
      names.push(item.host, ...item.speakers)
    }

    if (names.length !== 0) {
      target.push({
        id: (target.length + 1).toString(),
        title: item.title,
        track: track.name,
        type: item.type,
        start,
        end,
        speakers: names
          .map((x) => speakers.find((y) => y.name === x)!)
          .map((s) => ({
            name: s.name,
            role: s.company,
            bio: s.bio,
          })),
      })
    }
  }
}

function toRow(item: StreamingEntry) {
  return [
    item.id,
    item.title,
    item.abstract ?? '',
    item.description ?? '',
    item.track ?? '',
    item.type ?? '',
    item.room ?? '',
    item.start,
    item.end,
    item.speakers.map((x) => x.name).join(', '),
    ...item.speakers.flatMap((x) => [x.name, x.role ?? '', x.bio ?? '']),
  ].join('\t')
}

fs.writeFileSync('day1.tsv', day1.map(toRow).join('\n'))
fs.writeFileSync('day2.tsv', day2.map(toRow).join('\n'))

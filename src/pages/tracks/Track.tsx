import React from 'react'

import { Page } from '../common'
import agenda from '../data/agenda'
import { Logo } from './Logo'
import { Speakers } from './Speakers'
import { Title } from './Title'

export interface TrackProps {
  id: number
  track: typeof agenda[number]
}

export function Track({ id, track }: TrackProps) {
  return (
    <Page
      title="Layer Two Amsterdam"
      description="Layer Two Amsterdam is a two-day technical conference dedicated to Ethereum L2 Scaling."
      image="https://amsterdam.l2beat.com/images/meta.png"
      url={`https://amsterdam.l2beat.com/tracks/${id}`}
      stylesheets={['/styles/style.css']}
      scripts={['/scripts/main.js']}
    >
      <Logo />
      {track.items.map((item, i) => (
        <section
          key={i}
          className="hidden"
          data-track-start={`${track.date}T${item.start}:00+02:00`}
          data-track-end={`${track.date}T${item.end}:00+02:00`}
        >
          <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Title title={item.title} />
            <Speakers speakers={item.speakers} />
          </div>
          <div className="fixed bottom-16 left-0 w-full text-center text-2xl">
            From {item.start} to {item.end}
          </div>
          {track.items[i + 1] && (
            <div className="fixed right-6 top-4 text-right">
              <div className="text-lg uppercase font-bold">
                Coming up at {track.items[i + 1].start}
              </div>
              <div className="text-2xl">{track.items[i + 1].title}</div>
              <div className="text-lg">
                {track.items[i + 1].speakers?.join(', ')}
              </div>
            </div>
          )}
        </section>
      ))}
    </Page>
  )
}

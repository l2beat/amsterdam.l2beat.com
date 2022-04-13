import React from 'react'

import { Page } from '../common'
import agenda from '../data/agenda.json'

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
      url="https://amsterdam.l2beat.com"
      stylesheets={['/styles/style.css']}
      scripts={['/scripts/main.js']}
    >
      <div>Track {id}</div>
    </Page>
  )
}

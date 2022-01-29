import React from 'react'

import { Page } from '../common'

export function Home() {
  return (
    <Page
      title="Layer Two Amsterdam"
      description="Site under construction"
      image="https://amsterdam.l2beat.com/images/under-construction.png"
      url="https://amsterdam.l2beat.com"
      stylesheets={['/styles/style.css']}
      scripts={['/scripts/main.js']}
    >
      <h1 className="text-lg text-lime-700">Under construction</h1>
    </Page>
  )
}

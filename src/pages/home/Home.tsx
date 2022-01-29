import React from 'react'

import { Page } from '../common'
import { Banner } from './Banner'
import { Hero } from './Hero'

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
      <Banner />
      <main>
        <Hero />
      </main>
    </Page>
  )
}

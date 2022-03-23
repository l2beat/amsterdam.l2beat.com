import React from 'react'

import { Page } from '../common'
import { About } from './About'
import { Agenda } from './Agenda'
import { Banner } from './Banner'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Speakers } from './Speakers'
import { Sponsors } from './Sponsors'

export function Home() {
  return (
    <Page
      title="Layer Two Amsterdam"
      description="Layer Two Amsterdam is a two-day technical conference dedicated to Ethereum L2 Scaling."
      image="https://amsterdam.l2beat.com/images/meta.png"
      url="https://amsterdam.l2beat.com"
      stylesheets={['/styles/style.css']}
      scripts={['/scripts/main.js']}
    >
      <Banner />
      <main>
        <Hero />
        <About />
        <Sponsors />
        <Agenda />
        <Speakers />
        <Contact />
      </main>
      <Footer />
    </Page>
  )
}

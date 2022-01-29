import React from 'react'

import { Page } from '../common'
import { About } from './About'
import { Agenda } from './Agenda'
import { Banner } from './Banner'
import { Contact } from './Contact'
import { Footer } from './Footer'
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
        <About />
        <Agenda />
        <Contact />
      </main>
      <Footer />
    </Page>
  )
}

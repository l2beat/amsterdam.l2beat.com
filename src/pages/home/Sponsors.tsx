import React from 'react'

import { Section } from './Section'

export function Sponsors() {
  return (
    <Section title="Sponsors" color="pink">
      <h3 className="text-xl my-4">Platinum Sponsors</h3>
      <div className="flex">
        <a href="https://starkware.co/">
          <img
            width="500"
            height="200"
            src="/images/sponsor-logo-starkware.svg"
            alt="StarkWare Logo"
          />
        </a>
      </div>
      <h3 className="text-xl my-4">Gold Sponsors</h3>
      <div className="flex justify-center items-center gap-8">
        <a href="https://www.metis.io/">
          <img
            width="300"
            height="200"
            src="/images/sponsor-logo-metis.svg"
            alt="Metis Logo"
          />
        </a>
        <a href="https://boba.network/">
          <img
            width="250"
            height="200"
            src="/images/sponsor-logo-boba.svg"
            alt="Boba Logo"
          />
        </a>
      </div>
    </Section>
  )
}

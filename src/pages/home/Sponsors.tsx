import React from 'react'

import { Section } from './Section'

export function Sponsors() {
  return (
    <Section title="Sponsors" color="pink">
      <h3 className="text-xl my-8">Platinum Sponsors</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <a href="https://starkware.co/">
          <img
            width="500"
            height="200"
            src="/images/sponsor-logo-starkware.svg"
            alt="StarkWare Logo"
          />
        </a>
        <a href="https://https://arbitrum.io/">
          <img
            width="500"
            height="200"
            src="/images/sponsor-logo-arbitrum.png"
            alt="Arbitrum Logo"
          />
        </a>
      </div>
      <h3 className="text-xl my-8">Gold Sponsors</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <a href="https://www.optimism.io/">
          <img
            width="300"
            height="200"
            src="/images/sponsor-logo-optimism.svg"
            alt="Optimism Logo"
          />
        </a>
        <a href="https://www.metis.io/">
          <img
            width="300"
            height="200"
            src="/images/sponsor-logo-metis.svg"
            alt="Metis Logo"
          />
        </a>
        <a href="https://boba.network/" className="relative md:-top-[15px]">
          <img
            width="230"
            height="200"
            src="/images/sponsor-logo-boba.svg"
            alt="Boba Logo"
          />
        </a>
      </div>
    </Section>
  )
}

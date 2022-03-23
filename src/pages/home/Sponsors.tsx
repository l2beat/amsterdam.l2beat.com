import React from 'react'

import sponsorsList from '../data/sponsors.json'
import { Section } from './Section'

export function Sponsors() {
  return (
    <Section title="Sponsors" color="pink">
      <h3 className="text-xl my-8">Platinum Sponsors</h3>
      <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-[1000px]">
        {sponsorsList.platinum.map((sponsor, i) => (
          <SponsorItem key={i} {...sponsor} />
        ))}
      </div>
      <h3 className="text-xl my-8">Gold Sponsors</h3>
      <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-[1000px]">
        {sponsorsList.gold.map((sponsor, i) => (
          <SponsorItem key={i} {...sponsor} />
        ))}
      </div>
    </Section>
  )
}

export type Sponsor = typeof sponsorsList['platinum'][0]

function SponsorItem(props: Sponsor) {
  return (
    <a
      href={props.link}
      className="bg-pure shadow-sm flex items-center justify-center p-2 py-4 md:p-8 rounded-md"
    >
      <img
        src={props.image}
        alt={`${props.name}`}
        className="hover:scale-105 transition"
      />
    </a>
  )
}

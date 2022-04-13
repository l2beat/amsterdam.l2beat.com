import classnames from 'classnames'
import React from 'react'

import sponsorsList from '../data/sponsors.json'
import { Section } from './Section'

export function Sponsors() {
  return (
    <Section id="sponsors" title="Sponsors" color="pink">
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
      <h3 className="text-xl my-8">Silver Sponsors</h3>
      <div className="grid grid-cols-6 sm:grid-cols-4 gap-2 sm:gap-4 max-w-[1000px]">
        <div />
        {sponsorsList.silver.map((sponsor, i) => (
          <SponsorItem
            key={i}
            {...sponsor}
            className="col-span-2 sm:col-span-1"
          />
        ))}
      </div>
      <h3 className="text-xl my-8">Party sponsor</h3>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-[1000px]">
        {sponsorsList.party.map((sponsor, i) => (
          <SponsorItem
            key={i}
            {...sponsor}
            className="col-span-2 col-start-2"
          />
        ))}
      </div>
    </Section>
  )
}

export type Sponsor = typeof sponsorsList['platinum'][0]

function SponsorItem(props: Sponsor & { className?: string }) {
  return (
    <a
      href={props.link}
      className={classnames(
        'bg-pure shadow-sm flex items-center justify-center p-2 py-4 md:p-8 rounded-md max-h-[80px] sm:max-h-[120px] md:max-h-[180px]',
        props.className
      )}
    >
      <img
        src={props.image}
        alt={`${props.name}`}
        className="hover:scale-105 transition max-h-full"
      />
    </a>
  )
}

import React from 'react'

import { Section } from './Section'

export function About() {
  return (
    <Section
      id="about"
      className="bg-rural"
      title={
        <>
          About
          <br />
          the event
        </>
      }
      color="yellow"
    >
      <p className="text-xl max-w-[900px] mt-8">
        Layer Two Amsterdam is a two-day technical conference dedicated to
        Ethereum L2 Scaling. Meet industry leaders: builders and developers,
        learn during talks and panels and dig deeper by attending workshops.
      </p>
      <p className="text-xl max-w-[900px] mt-8">
        In the blockchain space, it can be hard to discover the technology,
        because it is wrapped in so many layers of marketing. This is why as
        L2BEAT we are carefully curating the agenda so that it focuses on
        aspects such as technological breakthroughs and security challenges.
      </p>
    </Section>
  )
}

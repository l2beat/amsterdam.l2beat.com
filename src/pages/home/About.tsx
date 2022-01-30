import React from 'react'

import { Heading } from './Heading'

export function About() {
  return (
    <section className="flex flex-col justify-center items-center my-24 min-h-[500px] bg-rural bg-center bg-no-repeat">
      <Heading color="yellow">About the event</Heading>
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
    </section>
  )
}

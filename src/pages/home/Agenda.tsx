import React from 'react'

import { Heading } from './Heading'

export function Agenda() {
  return (
    <section className="flex flex-col justify-center items-center my-32">
      <Heading color="pink">Agenda</Heading>
      <p className="text-xl max-w-[900px] mt-8">
        The conference agenda is still being actively worked on and we’ll be
        sure to post updates on our social media channels. In the meantime, you
        can rest assured that it is going to be something special.
      </p>
      <p className="text-xl max-w-[900px] mt-8">
        We’ve reached out to the teams building the rollups listed on L2BEAT and
        we got an overwhelmingly positive response so expect those names to show
        up! Additionally, we have a few surprises up our sleeve so be sure to
        look out for those too!
      </p>
    </section>
  )
}

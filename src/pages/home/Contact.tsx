import React from 'react'

import { CtaButton } from './CtaButton'
import { Heading } from './Heading'

export function Contact() {
  return (
    <section className="flex flex-col justify-center items-center my-32">
      <Heading color="yellow">Contact</Heading>
      <p className="text-xl max-w-[900px] mt-8 text-center mb-32">
        If you want to reach out and ask questions feel free to email us at:
        <br />
        <a className="font-bold" href="mailto:hello@l2beat.com">
          hello@l2beat.com
        </a>
      </p>
      <CtaButton />
    </section>
  )
}

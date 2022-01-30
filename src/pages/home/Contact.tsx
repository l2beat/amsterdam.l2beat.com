import React from 'react'

import { Section } from './Section'

export function Contact() {
  return (
    <Section className="bg-canal" title="Contact" color="yellow">
      <p className="text-xl max-w-[900px] mt-8 text-center">
        If you want to reach out and ask questions feel free to email us at:
        <br />
        <a className="font-bold" href="mailto:hello@l2beat.com">
          hello@l2beat.com
        </a>
      </p>
      <p className="text-xl max-w-[900px] mt-8 text-center">
        You can also follow us on Twitter to be subscribed to the latest
        updates:
        <br />
        <a
          className="font-bold"
          href="https://twitter.com/l2beatcom"
          target="_blank"
          rel="noreferrer noopener"
        >
          @l2beatcom
        </a>
      </p>
    </Section>
  )
}

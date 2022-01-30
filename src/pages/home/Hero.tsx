import React from 'react'

import { CtaButton } from './CtaButton'

const EVENT_PARAMS = new URLSearchParams({
  action: 'TEMPLATE',
  text: 'Layer Two Amsterdam',
  dates: '20220419T090000/20220420T170000',
  ctz: 'Europe/Amsterdam',
  details:
    'Layer Two Amsterdam is a two-day technical conference dedicated to Ethereum L2 Scaling. Meet industry leaders: builders and developers, learn during talks and panels and dig deeper by attending workshops.',
  location: 'Pakhuis de Zwijger, Amsterdam',
})

const EVENT_LINK = `https://calendar.google.com/calendar/render?${EVENT_PARAMS}`

export function Hero() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 mb-32 px-4">
      <p className="text-xl">
        <img
          className="inline mr-1 sm:mr-4 relative -top-[2px] sm:-top-1 w-[58px] sm:w-auto"
          src="/images/l2beat.svg"
          width={88}
          height={36}
          alt="L2BEAT"
        />{' '}
        and{' '}
        <img
          className="inline mx-1 sm:mx-4 relative top-[4px] sm:top-[7px] w-[93px] sm:w-auto"
          src="/images/devconnect.svg"
          width={140}
          height={53}
          alt="DevConnect AMS"
        />{' '}
        present
      </p>
      <h1>
        <img
          className="my-8"
          src="/images/logo.svg"
          width={619}
          height={234}
          alt="Layer Two Amsterdam"
        />
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-center md:text-left">
        <a
          className="block md:inline"
          href={EVENT_LINK}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="inline relative -top-[1px]"
            src="/images/icon-event.svg"
            width={24}
            height={24}
            alt="Date:"
          />{' '}
          April 19-20, 2022
        </a>{' '}
        <a
          className="block md:inline"
          href="https://goo.gl/maps/pyKdYD8nndpSFzb6A"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="inline relative -top-[1px] ml-3"
            src="/images/icon-place.svg"
            width={24}
            height={24}
            alt="Location:"
          />{' '}
          Pakhuis de Zwijger, Amsterdam
        </a>
      </p>
      <CtaButton />
    </section>
  )
}

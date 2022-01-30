import React from 'react'

import { CtaButton } from './CtaButton'

export function Hero() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 mb-32">
      <p className="text-xl">
        <img
          className="inline mr-4 relative -top-1"
          src="/images/l2beat.svg"
          width={88}
          height={36}
          alt="L2BEAT"
        />{' '}
        and{' '}
        <img
          className="inline mx-4 relative top-[7px]"
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
      <p className="text-2xl mb-12">
        <img
          className="inline relative -top-[1px] mr-1"
          src="/images/icon-event.svg"
          width={24}
          height={24}
          alt="Date:"
        />
        April 19-20, 2022
        <img
          className="inline relative -top-[1px] ml-3 mr-1"
          src="/images/icon-place.svg"
          width={24}
          height={24}
          alt="Location:"
        />
        Pakhuis de Zwijger, Amsterdam
      </p>
      <CtaButton />
    </section>
  )
}

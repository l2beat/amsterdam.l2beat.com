import React from 'react'

export function Hero() {
  return (
    <section className="flex flex-col justify-center items-center mt-20">
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
      <img
        className="my-8"
        src="/images/logo.svg"
        width={619}
        height={234}
        alt="Layer Two Amsterdam"
      />
      <p className="text-xl">
        <span className="text-2xl font-bold">April 19-20, 2022,</span> Pakhuis
        de Zwijger, Amsterdam
      </p>
    </section>
  )
}

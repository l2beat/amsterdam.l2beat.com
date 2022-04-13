import React from 'react'

export function Logo() {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center p-4">
      <div>
        <img
          className="inline relative mx-1 w-[200px]"
          src="/images/logo.svg"
          width={619}
          height={234}
          alt="Layer Two Amsterdam"
        />
        <img
          className="inline mx-1 relative top-[4px] w-[58px]"
          src="/images/l2beat.svg"
          width={88}
          height={36}
          alt="L2BEAT"
        />
        <img
          className="inline mx-1 relative top-[10px] w-[93px]"
          src="/images/devconnect.svg"
          width={140}
          height={53}
          alt="DevConnect AMS"
        />
      </div>
    </div>
  )
}

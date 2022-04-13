import React from 'react'

export function Title({ title }: { title: string }) {
  return (
    <h2 className="text-4xl mb-10 flex justify-center items-center">
      <sup
        data-track-live
        className="whitespace-nowrap bg-red p-2 text-pure uppercase text-xl relative top-[-1em] mr-4"
      >
        Live now
      </sup>{' '}
      <sup
        data-track-starting
        className="whitespace-nowrap bg-brand p-2 text-pure uppercase text-xl relative top-[-1em] mr-4"
      >
        Starting soon
      </sup>{' '}
      <span className="inline-block max-w-[80vw] min-w-auto">{title}</span>
    </h2>
  )
}

import React from 'react'

export function CtaButton() {
  return (
    <div className="flex gap-4">
      <a
        href="https://streameth.tv/event/l2-amsterdam/"
        className="text-white bg-brand px-4 py-2 text-xl rounded-md"
      >
        Watch Day 1
      </a>
      <a
        href="https://streameth.tv/event/l2-amsterdam-2/"
        className="text-white bg-brand px-4 py-2 text-xl rounded-md"
      >
        Watch Day 2
      </a>
    </div>
  )
}

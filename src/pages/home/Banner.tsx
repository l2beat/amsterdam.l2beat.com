import React from 'react'

export function Banner() {
  return (
    <div className="h-10 bg-accent overflow-hidden whitespace-pre flex items-center">
      <div className="animate-marquee">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="inline-block">
            L2BEAT and DevConnect present: Layer Two Amsterdam / April 19-20,
            2022, Pakhuis de Zwijger, Amsterdam / A technical conferenced
            focused on L2 Ethereum scaling /{' '}
          </span>
        ))}
      </div>
    </div>
  )
}

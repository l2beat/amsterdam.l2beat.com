import React, { ReactNode } from 'react'

interface HeadingProps {
  id: string
  children: ReactNode
  color: 'yellow' | 'pink'
}

export function Heading({ children, id, color }: HeadingProps) {
  const src = `/images/flowers-${color}.svg`
  const alt = `${color === 'yellow' ? 'Yellow' : 'Pink'} Ethereum tulips`

  return (
    <div className="flex items-center">
      <img
        className="w-16 md:w-auto"
        width={104}
        height={63}
        src={src}
        alt={alt}
      />
      <h2 id={id} className="uppercase mx-6 text-2xl font-bold text-center">
        {children}
      </h2>
      <img
        className="w-16 md:w-auto"
        width={104}
        height={63}
        src={src}
        alt={alt}
      />
    </div>
  )
}

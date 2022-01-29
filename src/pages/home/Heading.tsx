import React, { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  color: 'yellow' | 'pink'
}

export function Heading({ children, color }: HeadingProps) {
  const src = `/images/flowers-${color}.svg`
  const alt = `${color === 'yellow' ? 'Yellow' : 'Pink'} Ethereum tulips`

  return (
    <div className="flex items-center">
      <img width={104} height={63} src={src} alt={alt} />
      <h2 className="uppercase mx-6 text-2xl font-bold max-w-[160px] text-center">
        {children}
      </h2>
      <img width={104} height={63} src={src} alt={alt} />
    </div>
  )
}

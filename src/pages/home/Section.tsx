import cx from 'classnames'
import React, { ReactNode } from 'react'

import { Heading } from './Heading'

export interface SectionProps {
  className?: string
  title: ReactNode
  color: 'yellow' | 'pink'
  children: ReactNode
}

export function Section({ className, title, color, children }: SectionProps) {
  return (
    <section
      className={cx(
        'flex flex-col justify-center items-center my-16 md:my-20 px-4 min-h-[500px] bg-center bg-no-repeat',
        className
      )}
    >
      <Heading color={color}>{title}</Heading>
      {children}
    </section>
  )
}

import cx from 'classnames'
import React, { ReactNode } from 'react'

import { Heading } from './Heading'

export interface SectionProps {
  className?: string
  title: ReactNode
  id: string
  color: 'yellow' | 'pink'
  children: ReactNode
}

export function Section({
  className,
  id,
  title,
  color,
  children,
}: SectionProps) {
  return (
    <section
      className={cx(
        'flex flex-col justify-center items-center my-16 md:my-20 px-4 min-h-[500px] bg-center bg-no-repeat',
        className
      )}
    >
      <a href={`#${id}`}>
        <Heading id={id} color={color}>
          {title}
        </Heading>
      </a>
      {children}
    </section>
  )
}

import React, { ReactNode } from 'react'

import { Head, HeadProps } from './Head'

interface Props extends HeadProps {
  scripts: string[]
  children: ReactNode
}

export function Page({ children, scripts, ...head }: Props) {
  return (
    <html
      lang="en"
      className="text-[14px] md:text-[16px] font-sans font-medium bg-white text-brand"
    >
      <Head {...head} />
      <body>
        {children}
        {scripts.map((src, i) => (
          <script key={i} src={src} />
        ))}
      </body>
    </html>
  )
}

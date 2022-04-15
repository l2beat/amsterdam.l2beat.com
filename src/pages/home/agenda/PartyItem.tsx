import React from 'react'

import { AgendaParty } from '../../data/agenda'

interface PartyItemProps {
  item: AgendaParty
}

export function PartyItem({ item }: PartyItemProps) {
  return (
    <td colSpan={2} className="text-center md:text-left md:pl-8">
      <a
        className="block w-full py-4 font-bold"
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="uppercase">{item.title}</span>{' '}
        <small>(click me)</small>
      </a>
    </td>
  )
}

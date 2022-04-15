import React from 'react'

import { AgendaBreak, AgendaCheckIn } from '../../data/agenda'

interface SpecialItemProps {
  item: AgendaBreak | AgendaCheckIn
}

export function SpecialItem({ item }: SpecialItemProps) {
  return (
    <td
      colSpan={2}
      className="text-center md:text-left md:pl-8 p-2 uppercase font-bold"
    >
      {item.title}
    </td>
  )
}

import classnames from 'classnames'
import React from 'react'

import { AgendaItem } from '../../data/agenda'
import { PartyItem } from './PartyItem'
import { SpecialItem } from './SpecialItem'
import { SpeechItem } from './SpeechItem'

interface TrackItemProps {
  evenRow: boolean
  item: AgendaItem
}

export function TrackItem({ item, evenRow }: TrackItemProps) {
  return (
    <tr
      className={classnames(
        evenRow && item.type !== 'party' && 'bg-pure',
        item.type === 'party' && 'bg-[#4e529a] text-pure'
      )}
    >
      <td className="whitespace-pre font-mono p-2 pl-4">
        {item.start} - {item.end}
      </td>
      <TrackItemDetails item={item} />
    </tr>
  )
}

function TrackItemDetails({ item }: { item: AgendaItem }) {
  switch (item.type) {
    case 'talk':
    case 'announcement':
    case 'workshop':
    case 'panel':
      return <SpeechItem item={item} />
    case 'break':
    case 'check-in':
      return <SpecialItem item={item} />
    case 'party':
      return <PartyItem item={item} />
  }
}

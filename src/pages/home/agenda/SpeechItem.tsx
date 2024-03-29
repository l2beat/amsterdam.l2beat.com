import React from 'react'

import {
  AgendaAnnouncement,
  AgendaPanel,
  AgendaTalk,
  AgendaWorkshop,
} from '../../data/agenda'

interface SpeechItemProps {
  item: AgendaTalk | AgendaAnnouncement | AgendaWorkshop | AgendaPanel
}

export function SpeechItem({ item }: SpeechItemProps) {
  const companies = item.type === 'panel' ? item.companies : [item.company]
  return (
    <>
      <td className="p-2">
        <p className="font-bold whitespace-pre-line">
          {item.type === 'panel' && `Host: ${item.host}\n`}
          {item.speakers.join('\n')}
        </p>
        <p className="text-sm">{companies.join(', ')}</p>
      </td>
      <td className="p-2">
        {item.type !== 'talk' && (
          <>
            <span className="uppercase px-2 py-0.5 bg-accent">{item.type}</span>{' '}
          </>
        )}
        {item.title}
        {item.type === 'panel' ||
          (item.type === 'talk' && item.link && (
            <>
              {' '}
              <a
                className="text-sm font-bold bg-brand text-white whitespace-nowrap px-2"
                target="blank"
                rel="noopener noreferrer"
                href={item.link}
              >
                <span className="sr-only">Watch on </span>YouTube
              </a>
            </>
          ))}
      </td>
    </>
  )
}

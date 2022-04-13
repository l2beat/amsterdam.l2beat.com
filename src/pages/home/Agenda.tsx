import classnames from 'classnames'
import React from 'react'

import agenda from '../data/agenda.json'
import { Section } from './Section'

const specialTypes = ['break', 'check-in', 'party']

export function Agenda() {
  return (
    <Section
      id="agenda"
      title="Agenda"
      className="max-w-[1200px] mx-auto"
      color="yellow"
    >
      <div className="overflow-auto mt-8 -mx-4 w-[100vw] md:w-full md:mx-0">
        <table id="agenda-table" className="min-w-full">
          <tbody>
            {agenda.map((track, i) => (
              <React.Fragment key={i}>
                <tr className="">
                  <th colSpan={3} className="py-10 px-0">
                    <div className="bg-brand text-pure text-left text-2xl p-4">
                      {track.name}
                    </div>
                  </th>
                </tr>
                <tr>
                  <th className="text-left text-md uppercase py-1 px-2 pl-4">
                    Time
                  </th>
                  <th className="text-left text-md uppercase py-1 px-2">
                    Speaker
                  </th>
                  <th className="text-left text-md uppercase py-1 px-2">
                    Title
                  </th>
                </tr>
                {track.items.map((item, i) => (
                  <tr
                    key={i}
                    className={classnames(
                      i % 2 === 0 && item.type !== 'party' && 'bg-pure',
                      item.type === 'party' && 'bg-[#4e529a] text-pure'
                    )}
                  >
                    <td className="whitespace-pre font-mono p-2 pl-4">
                      {item.start} - {item.end}
                    </td>
                    {!specialTypes.includes(item.type) && (
                      <>
                        <td className="p-2">
                          <p className="font-bold whitespace-pre-line">
                            {item.speakers?.join('\n')}
                          </p>
                          <p className="text-sm">{item.company}</p>
                        </td>
                        <td className="p-2">
                          {item.type !== 'talk' && (
                            <>
                              <span className="uppercase px-2 py-0.5 bg-accent">
                                {item.type}
                              </span>{' '}
                            </>
                          )}
                          {item.title}
                        </td>
                      </>
                    )}
                    {specialTypes.includes(item.type) && item.type !== 'party' && (
                      <td
                        colSpan={2}
                        className="text-center md:text-left md:pl-8 p-2 uppercase font-bold"
                      >
                        {item.title}
                      </td>
                    )}

                    {item.type === 'party' && (
                      <td
                        colSpan={2}
                        className="text-center md:text-left md:pl-8"
                      >
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
                    )}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

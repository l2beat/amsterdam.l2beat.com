import classnames from 'classnames'
import React from 'react'

import agenda from '../data/agenda.json'
import { Section } from './Section'

export function Agenda() {
  return (
    <Section title="Agenda" className="max-w-[1200px] mx-auto" color="yellow">
      <div className="w-full overflow-auto mt-8">
        <table className="min-w-full">
          <tbody>
            {agenda.map((track, i) => (
              <React.Fragment key={i}>
                <tr className="">
                  <th colSpan={3} className="py-10">
                    <div className="bg-brand text-pure text-left text-2xl p-4">
                      {track.name}
                    </div>
                  </th>
                </tr>
                <tr>
                  <th className="text-left text-md uppercase py-1">Time</th>
                  <th className="text-left text-md uppercase py-1">Speaker</th>
                  <th className="text-left text-md uppercase py-1">Title</th>
                </tr>
                {track.items.map((item, i) => (
                  <tr key={i} className={classnames(i % 2 === 0 && 'bg-pure')}>
                    <td className="whitespace-pre font-mono pr-2 py-2">
                      {item.start} - {item.end}
                    </td>
                    {item.type !== 'break' && item.type !== 'check-in' && (
                      <>
                        <td className="py-2">
                          <p className="font-bold whitespace-pre-line">
                            {item.speakers?.join('\n')}
                          </p>
                          <p className="text-sm">{item.company}</p>
                        </td>
                        <td className="py-2">
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
                    {(item.type === 'break' || item.type === 'check-in') && (
                      <td
                        colSpan={2}
                        className="text-center md:text-left md:pl-8 py-2 uppercase font-bold"
                      >
                        {item.title}
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

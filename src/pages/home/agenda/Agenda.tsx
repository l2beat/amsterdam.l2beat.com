import React from 'react'

import { agenda } from '../../data/agenda'
import { Section } from '../Section'
import { HeaderRow } from './HeaderRow'
import { TrackItem } from './TrackItem'

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
                <HeaderRow />
                {track.items.map((item, i) => (
                  <TrackItem key={i} evenRow={i % 2 === 0} item={item} />
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

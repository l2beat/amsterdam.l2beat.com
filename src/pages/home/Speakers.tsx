import React from 'react'

import speakerList from '../data/speakers.json'
import { Section } from './Section'

export function Speakers() {
  return (
    <Section title="Speakers" color="yellow">
      <ul className="grid max-w-[1200px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 pt-8">
        {speakerList.map((speaker, i) => (
          <li className="flex flex-col items-stretch" key={i}>
            <div className="flex items-center gap-4 mb-2 px-4">
              <img
                src={speaker.image}
                className="w-32 h-32 rounded-full"
                style={{ filter: 'sepia(100%) hue-rotate(191deg) ' }}
              />
              <div>
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p>{speaker.company}</p>
              </div>
            </div>
            <p className="text-sm">{speaker.bio}</p>
          </li>
        ))}
      </ul>
      <p className="text-xl text-center mt-32">And more!</p>
    </Section>
  )
}

import React from 'react'

import { speakers } from '../data/speakers'

export function Speakers(props: { speakers?: string[] }) {
  if (!props.speakers) {
    return null
  }
  return (
    <ul className="flex justify-center items-start">
      {props.speakers
        .map((name) => speakers.find((x) => x.name === name))
        .map(
          (speaker, i) =>
            speaker && (
              <li
                key={i}
                className="text-center flex flex-col items-center justify-center"
              >
                <img
                  src={speaker.image}
                  width="256"
                  height="256"
                  className="w-48 h-48 rounded-full mb-4"
                  style={{
                    filter: 'sepia(100%) hue-rotate(191deg) ',
                  }}
                  alt={`Photograph of ${speaker.name}`}
                />
                <div>
                  <h3 className="text-2xl font-bold">{speaker.name}</h3>
                  <p>{speaker.company}</p>
                </div>
              </li>
            )
        )}
    </ul>
  )
}

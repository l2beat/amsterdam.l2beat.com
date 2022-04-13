import React from 'react'

import { reactToHtml } from '../util'
import { Track, TrackProps } from './Track'

export function renderTrack(props: TrackProps) {
  return {
    slug: `/tracks/${props.id}`,
    page: reactToHtml(<Track {...props} />),
  }
}

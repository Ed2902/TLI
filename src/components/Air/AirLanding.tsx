import React from 'react'

import { AirCTA } from './AirCTA'
import { AirCapabilities } from './AirCapabilities'
import { AirHero } from './AirHero'
import { AirProcess } from './AirProcess'

export function AirLanding() {
  return (
    <main className='bg-white pt-24'>
      <AirHero />
      <AirCapabilities />
      <AirProcess />
      <AirCTA />
    </main>
  )
}

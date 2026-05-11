import React from 'react'

import { OceanCTA } from './OceanCTA'
import { OceanCapabilities } from './OceanCapabilities'
import { OceanHero } from './OceanHero'
import { OceanProcess } from './OceanProcess'

export function OceanLanding() {
  return (
    <main className='bg-white pt-24'>
      <OceanHero />
      <OceanCapabilities />
      <OceanProcess />
      <OceanCTA />
    </main>
  )
}

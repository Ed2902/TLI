import React from 'react'

import { FtlLclCTA } from './FtlLclCTA'
import { FtlLclCapabilities } from './FtlLclCapabilities'
import { FtlLclHero } from './FtlLclHero'
import { FtlLclProcess } from './FtlLclProcess'

export function FtlLclLanding() {
  return (
    <main className='bg-white pt-24'>
      <FtlLclHero />
      <FtlLclCapabilities />
      <FtlLclProcess />
      <FtlLclCTA />
    </main>
  )
}

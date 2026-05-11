'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { QuoteNowHero } from './QuoteNowHero'
import { QuoteNowForm } from './QuoteNowForm'
import { QuoteNowCTA } from './QuoteNowCTA'

export function QuoteNowLanding() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <main>
      <QuoteNowHero />
      <QuoteNowForm />
      <QuoteNowCTA />
    </main>
  )
}

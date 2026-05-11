'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ClientsHero from '@/components/Clients/ClientsHero'
import ClientShowcase from '@/components/Clients/ClientShowcase'
import ClientStats from '@/components/Clients/ClientStats'
import ClientTestimonials from '@/components/Clients/ClientTestimonials'
import ClientValues from '@/components/Clients/ClientValues'
import Footer from '@/components/Footer'

export default function ClientsPage() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <>
      <main className='relative overflow-hidden bg-[#f4f8fb] pt-12'>
        {/* animated gradient blobs */}
        <div
          aria-hidden
          className='pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl mix-blend-multiply moving-blob blob-primary'
        />

        <div
          aria-hidden
          className='pointer-events-none absolute -right-40 top-[42rem] h-[28rem] w-[28rem] rounded-full opacity-20 blur-2xl mix-blend-screen moving-blob-2 blob-accent'
        />

        <ClientsHero />

        <section className='w-full py-0'>
          <div className='space-y-0'>
            <div data-aos='fade-up'>
              <ClientShowcase />
            </div>
            <div data-aos='zoom-in'>
              <ClientStats />
            </div>
            <div data-aos='fade-right'>
              <ClientTestimonials />
            </div>
            <div data-aos='fade-left'>
              <ClientValues />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

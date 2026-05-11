import React from 'react'
import { clientsHero } from '../../lib/clients-data'
import Link from 'next/link'

export default function ClientsHero() {
  return (
    <header className='w-full border-b border-slate-200/80 bg-white'>
      <div className='mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24'>
        <div className='max-w-3xl' data-aos='fade-right'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#0a4eb6]'>
            Client Relations
          </p>
          <h1 className='mb-6 text-5xl font-extrabold leading-[1.02] text-slate-900 md:text-6xl'>
            {clientsHero.title}
          </h1>

          <p className='max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl'>
            {clientsHero.subtitle}
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <Link
              href='/quote-now'
              className='inline-flex rounded-full bg-[#18aeea] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0a4eb6]'
            >
              Request a Quote
            </Link>
            <Link
              href='/clients'
              className='inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50'
            >
              View Client Story
            </Link>
          </div>
        </div>

        <div className='relative' data-aos='zoom-in' data-aos-delay='150'>
          <div
            aria-hidden
            className='absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#2cad3f]/20 via-[#0a4eb6]/10 to-transparent blur-2xl'
          />
          <div className='relative grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl md:grid-cols-2'>
            <div className='rounded-2xl bg-white p-5 shadow-md'>
              <p className='text-xs font-bold uppercase tracking-[0.25em] text-slate-400'>
                Coverage
              </p>
              <p className='mt-3 text-2xl font-extrabold text-slate-900'>
                120+ countries
              </p>
              <p className='mt-2 text-sm leading-relaxed text-slate-600'>
                Global execution with local coordination.
              </p>
            </div>
            <div className='rounded-2xl bg-gradient-to-br from-[#0a4eb6] to-[#042c51] p-5 text-white shadow-md'>
              <p className='text-xs font-bold uppercase tracking-[0.25em] text-white'>
                Operations
              </p>
              <p className='mt-3 text-2xl font-extrabold text-white'>
                Real-time support
              </p>
              <p className='mt-2 text-sm leading-relaxed text-white'>
                Dedicated coordination for every shipment.
              </p>
            </div>
            <div className='rounded-2xl bg-white p-5 shadow-md md:col-span-2'>
              <p className='text-xs font-bold uppercase tracking-[0.25em] text-slate-400'>
                Approach
              </p>
              <p className='mt-3 text-sm leading-relaxed text-slate-600'>
                Internal hub for logos, testimonials, partner snapshots and
                messaging — easy to update when the company provides new assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

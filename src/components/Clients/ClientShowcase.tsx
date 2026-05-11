import React from 'react'
import { clientLogos } from '../../lib/clients-data'

export default function ClientShowcase() {
  return (
    <section className='w-full bg-slate-50 py-16'>
      <div className='mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
        <div className='rounded-[2rem] bg-white p-8 shadow-xl lg:sticky lg:top-8'>
          <p className='mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#0a4eb6]'>
            Trusted partners
          </p>
          <h2 className='text-3xl font-bold leading-tight text-slate-900'>
            The brands we support every day
          </h2>
          <p className='mt-4 text-base leading-relaxed text-slate-600'>
            A visual block for logos and partner marks. Replace the assets in
            `public/images/clients` whenever the company sends updated files.
          </p>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            <div className='rounded-2xl bg-[#042c51] p-4 text-white'>
              <p className='text-xs font-bold uppercase tracking-[0.25em] text-white/80'>
                Format
              </p>
              <p className='mt-2 text-lg font-semibold text-white'>Logo wall</p>
            </div>
            <div className='rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200'>
              <p className='text-xs font-bold uppercase tracking-[0.25em] text-slate-400'>
                Assets
              </p>
              <p className='mt-2 text-lg font-semibold text-slate-900'>
                Editable SVG / PNG
              </p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-5 md:grid-cols-3'>
          {clientLogos.map((c, index) => (
            <div
              key={c.id}
              className={`flex h-36 items-center justify-center rounded-[1.5rem] border p-6 shadow-lg transition-all hover:-translate-y-1 ${index % 3 === 0 ? 'bg-white border-slate-200' : index % 3 === 1 ? 'bg-[#f4f8fb] border-slate-200' : 'bg-[#042c51] border-[#042c51] text-white [&_*]:text-white'}`}
              title={c.name}
            >
              {c.logo ? (
                // Replace logos at /public/images/clients
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={c.logo}
                  alt={c.name}
                  className='h-12 object-contain'
                />
              ) : (
                <span className='text-sm font-medium'>{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

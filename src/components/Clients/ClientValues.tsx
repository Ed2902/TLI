import React from 'react'
import { clientValues } from '../../lib/clients-data'

export default function ClientValues() {
  return (
    <section className='w-full bg-white py-16'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#0a4eb6]'>
              How we work
            </p>
            <h3 className='text-3xl font-bold text-slate-900'>Our Values</h3>
          </div>
          <p className='max-w-2xl text-base leading-relaxed text-slate-600'>
            A modular layout for the internal client page: easy to swap text,
            colors and illustrations without rebuilding the structure.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
          {clientValues.map((v, i) => {
            const wideClass =
              i === 0
                ? 'lg:col-span-5'
                : i === 1
                  ? 'lg:col-span-4'
                  : 'lg:col-span-3'
            return (
              <div
                key={v.id}
                className={`overflow-hidden rounded-[2rem] shadow-xl ${wideClass}`}
              >
                <div
                  className={`px-8 py-8 ${i % 2 === 0 ? 'bg-gradient-to-br from-[#2cad3f] to-[#0a4eb6] text-white' : 'bg-slate-100 text-slate-900'}`}
                >
                  <p className='text-xs font-bold uppercase tracking-[0.25em] opacity-70'>
                    Principle
                  </p>
                  <h4 className='mt-4 text-2xl font-bold'>{v.title}</h4>
                </div>
                <div className='bg-white p-8'>
                  <p className='text-base leading-relaxed text-slate-700'>
                    {v.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

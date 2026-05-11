import React from 'react'
import { clientStats } from '../../lib/clients-data'

export default function ClientStats() {
  return (
    <section className='w-full bg-gradient-to-r from-[#0a4eb6] to-[#042c51] py-12 text-white'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='rounded-2xl p-8 text-white'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-3'>
            {clientStats.map(s => (
              <div
                key={s.id}
                className='flex min-h-[120px] flex-col items-center justify-center rounded-lg bg-white/5 p-6'
              >
                <div className='text-4xl font-extrabold text-white'>
                  {s.value}
                </div>
                <div className='mt-3 text-base text-white/80'>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

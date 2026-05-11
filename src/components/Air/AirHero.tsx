import React from 'react'

export function AirHero() {
  return (
    <section
      className='relative overflow-hidden bg-white px-6 py-20 text-slate-900'
      data-aos='fade-up'
    >
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between'>
        <div className='max-w-3xl'>
          <p className='mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#0a4eb6]'>
            Air Freight
          </p>
          <h1 className='text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl'>
            Fast and reliable air freight services across North and South
            America.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600'>
            We move urgent, high-value, and time-sensitive cargo with precision.
            From first mile pickup to final delivery, our air freight service is
            built for speed, visibility, and control.
          </p>
        </div>

        <div
          className='grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-900 shadow-sm sm:grid-cols-2 lg:w-[420px]'
          data-aos='zoom-in'
          data-aos-delay='100'
        >
          <div>
            <p className='text-sm uppercase tracking-[0.25em] text-slate-500'>
              Coverage
            </p>
            <p className='mt-2 text-2xl font-bold text-slate-900'>
              North & South America
            </p>
          </div>
          <div>
            <p className='text-sm uppercase tracking-[0.25em] text-slate-500'>
              Focus
            </p>
            <p className='mt-2 text-2xl font-bold text-slate-900'>
              Speed + Visibility
            </p>
          </div>
          <div>
            <p className='text-sm uppercase tracking-[0.25em] text-slate-500'>
              Cargo Types
            </p>
            <p className='mt-2 text-2xl font-bold text-slate-900'>
              General, sensitive, urgent
            </p>
          </div>
          <div>
            <p className='text-sm uppercase tracking-[0.25em] text-slate-500'>
              Support
            </p>
            <p className='mt-2 text-2xl font-bold text-slate-900'>
              24/7 Shipment Tracking
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto mt-12 grid w-full max-w-7xl gap-6 lg:grid-cols-[1.4fr_0.9fr]'>
        <div
          className='rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm'
          data-aos='fade-right'
        >
          <div className='flex min-h-[320px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 text-center'>
            <div>
              <p className='text-sm font-bold uppercase tracking-[0.3em] text-[#0a4eb6]'>
                Image Space
              </p>
              <p className='mt-3 text-lg font-semibold text-slate-900'>
                Main aircraft or cargo handling image goes here
              </p>
            </div>
          </div>
        </div>

        <div className='grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm'>
          <div
            className='flex min-h-[150px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center'
            data-aos='fade-left'
          >
            <p className='text-base font-semibold text-slate-700'>
              Secondary image or infographic space
            </p>
          </div>
          <div
            className='flex min-h-[150px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center'
            data-aos='fade-left'
            data-aos-delay='100'
          >
            <p className='text-base font-semibold text-slate-700'>
              Air route map or tracking visual space
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

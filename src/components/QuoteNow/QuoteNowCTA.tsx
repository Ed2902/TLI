import React from 'react'

export function QuoteNowCTA() {
  return (
    <section
      className='relative overflow-hidden bg-gradient-to-r from-[#0a4eb6] via-[#18aeea] to-[#2cad3f] px-6 py-16 text-white'
      data-aos='fade-up'
    >
      <div className='absolute left-[-48px] top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl' />
      <div className='absolute right-[-44px] bottom-0 h-56 w-56 rounded-full bg-white/10 blur-3xl' />

      <div className='relative mx-auto w-full max-w-4xl text-center'>
        <h2 className='text-3xl font-extrabold md:text-4xl'>
          Can&apos;t Find What You Need?
        </h2>
        <p className='mx-auto mt-4 max-w-2xl text-lg text-white/90'>
          Our logistics experts are ready to help. Get personalized support for
          complex shipments, special requirements, or bulk orders.
        </p>

        <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center'>
          <button className='rounded-xl border-2 border-white bg-transparent px-8 py-3 font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0a4eb6]'>
            Call Us
          </button>
          <button className='rounded-xl bg-white px-8 py-3 font-bold text-[#0a4eb6] shadow-lg transition-all duration-300 hover:bg-slate-100'>
            Email Support
          </button>
        </div>
      </div>
    </section>
  )
}

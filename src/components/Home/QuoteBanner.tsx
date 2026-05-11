import Link from 'next/link'
import React from 'react'

export function QuoteBanner() {
  return (
    <section
      aria-labelledby='quote-banner-title'
      className='bg-white px-6 py-16'
    >
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#f4f8fb] px-8 py-10 text-center md:flex-row md:text-left'>
        <div>
          <p className='mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#0a4eb6]'>
            Ready to ship?
          </p>

          <h2
            id='quote-banner-title'
            className='text-3xl font-bold text-[#042c51] md:text-4xl'
          >
            Get a fast and reliable logistics quote today.
          </h2>
        </div>

        <Link
          href='/quote-now'
          className='inline-flex rounded-full bg-[#18aeea] px-8 py-4 text-sm font-bold uppercase text-white shadow-md transition hover:bg-[#0a4eb6]'
        >
          Quote Now
        </Link>
      </div>
    </section>
  )
}

export default QuoteBanner

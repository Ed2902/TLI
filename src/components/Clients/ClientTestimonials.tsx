'use client'

import React, { useEffect, useRef, useState } from 'react'
import { testimonials } from '../../lib/clients-data'

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef<number | null>(null)
  const delay = 5200

  useEffect(() => {
    if (!testimonials.length) return

    const tick = () => {
      setIndex(current => (current + 1) % testimonials.length)
    }

    timeoutRef.current = window.setInterval(tick, delay)

    return () => {
      if (timeoutRef.current) {
        window.clearInterval(timeoutRef.current)
      }
    }
  }, [])

  return (
    <section
      className='relative overflow-hidden bg-[#f4f8fb] px-6 py-24'
      aria-labelledby='testimonials-title'
    >
      <div className='pointer-events-none absolute inset-0'>
        <div className='location-light-green absolute left-[-10%] top-1/4 h-80 w-80 rounded-full bg-[#2cad3f]/30 blur-3xl' />
        <div className='location-light-blue absolute right-[-8%] top-10 h-96 w-96 rounded-full bg-[#0a4eb6]/20 blur-3xl' />
      </div>

      <div className='relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center'>
        <div data-aos='fade-right' className='max-w-xl'>
          <p className='mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#0a4eb6]'>
            Testimonials
          </p>

          <h3
            id='testimonials-title'
            className='text-3xl font-bold leading-tight text-[#042c51] md:text-5xl'
          >
            What clients say about the way we operate.
          </h3>

          <p className='mt-5 text-base leading-relaxed text-[#4a5568] md:text-lg'>
            A cleaner testimonial area with stronger hierarchy, more breathing
            room and a background that matches the location section language.
          </p>

          <div className='mt-8 inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/85 px-4 py-2 text-sm font-medium text-[#042c51] shadow-sm backdrop-blur'>
            <span className='h-2.5 w-2.5 rounded-full bg-[#0a4eb6]' />
            Auto-rotating client quotes
          </div>
        </div>

        <div data-aos='fade-left' data-aos-delay='150' className='relative'>
          <div className='w-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-2xl backdrop-blur sm:p-10'>
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-700 ease-out'
                style={{
                  transform: `translateX(-${index * (100 / testimonials.length)}%)`,
                  width: `${testimonials.length * 100}%`,
                }}
              >
                {testimonials.map(t => (
                  <div
                    key={t.id}
                    className='shrink-0 px-1'
                    style={{ width: `${100 / testimonials.length}%` }}
                  >
                    <div className='flex min-h-[390px] w-full flex-col justify-between'>
                      <div>
                        <div className='mb-10 flex items-center gap-3 text-[#0a4eb6]'>
                          <span className='text-4xl leading-none text-[#2cad3f]'>
                            “
                          </span>
                          <span className='text-xs font-bold uppercase tracking-[0.3em]'>
                            Client voice
                          </span>
                        </div>

                        <p className='break-words text-xl font-medium leading-relaxed text-[#042c51] sm:text-2xl'>
                          {t.quote}
                        </p>
                      </div>

                      <div className='mt-8 border-t border-slate-200 pt-5'>
                        <p className='break-words text-base font-semibold text-[#042c51]'>
                          {t.name}
                        </p>
                        <p className='mt-1 break-words text-sm text-[#4a5568]'>
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-3 pt-8'>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type='button'
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? 'w-10 bg-[#0a4eb6]'
                      : 'w-5 bg-[#0a4eb6]/30 hover:bg-[#0a4eb6]/50'
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

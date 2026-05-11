import Link from 'next/link'
import React from 'react'
import { Nav } from './Nav'

export function Hero() {
  return (
    <section className='relative min-h-screen overflow-hidden bg-white text-white'>
      <video
        className='absolute inset-0 h-full w-full object-cover'
        autoPlay
        muted
        loop
        playsInline
      >
        <source src='/videos/hero.mp4' type='video/mp4' />
      </video>

      <div className='pointer-events-none absolute inset-x-0 top-0 z-10 h-44 bg-gradient-to-b from-white/35 to-transparent' />

      <div className='relative z-20'>
        <Nav />
      </div>

      <div className='relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 pt-24'>
        <div className='max-w-3xl'>
          <h1
            className='mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl'
            style={{
              color: '#ffffff',
              WebkitTextFillColor: '#ffffff',
              background: 'none',
              textShadow: '0 2px 18px rgba(0, 0, 0, 0.65)',
            }}
          >
            Global transport solutions
          </h1>

          <p
            className='mb-8 max-w-2xl text-lg leading-relaxed text-white md:text-xl'
            style={{
              color: '#ffffff',
              WebkitTextFillColor: '#ffffff',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.45)',
            }}
          >
            Air, ocean and ground logistics designed to move your cargo safely,
            efficiently and on time.
          </p>

          <Link
            href='/quote-now'
            className='inline-flex rounded-md bg-[#18aeea] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#0a4eb6]'
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/clients', label: 'Clients' },
    { href: '/logistics-solutions', label: 'Logistics Solutions' },
    { href: '/air', label: 'Air' },
    { href: '/ocean', label: 'Ocean' },
    { href: '/ftl-lcl', label: 'FTL / LCL' },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      aria-label='Main navigation'
      className={`z-50 w-full border-b border-white/10 bg-white/[0.05] backdrop-blur-md ${
        isHome ? 'fixed left-0 right-0 top-0' : 'sticky top-0'
      }`}
    >
      <div className='mx-auto flex h-24 max-w-7xl items-center justify-between px-6'>
        <Link
          href='/'
          aria-label='Web Transport home'
          className='flex items-center'
        >
          <Image
            src='/transport.webp'
            alt='Web Transport logo'
            width={180}
            height={60}
            priority
            className='h-auto w-[160px] object-contain drop-shadow-[0_5px_12px_rgba(4,44,81,0.45)] md:w-[180px]'
          />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden items-center gap-4 lg:flex'>
          {links.map(link => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wide shadow-sm backdrop-blur-sm transition ${
                  isActive
                    ? 'border-[#0a4eb6] bg-white/55 text-[#0a4eb6]'
                    : 'border-transparent bg-white/25 text-[#042c51] hover:border-[#0a4eb6]/40 hover:bg-white/45 hover:text-[#0a4eb6]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
          className='lg:hidden flex flex-col gap-1.5'
        >
          <span
            className={`h-0.5 w-6 bg-[#042c51] transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#042c51] transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[#042c51] transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        <div className='hidden items-center gap-3 lg:flex'>
          <Link
            href='/quote-now'
            className={`rounded-full border px-6 py-3 text-sm font-bold uppercase shadow-sm transition ${
              pathname.startsWith('/quote-now')
                ? 'border-[#0a4eb6] bg-white/55 text-[#0a4eb6]'
                : 'border-[#18aeea] bg-[#18aeea] text-white hover:bg-[#0a4eb6]'
            }`}
          >
            Quote Now
          </Link>

          <Link
            href='/login'
            aria-label='Login'
            className='group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#0a4eb6]/30 bg-white/50 text-[#042c51] transition hover:border-[#0a4eb6] hover:text-[#0a4eb6]'
          >
            <span className='text-xl leading-none'>👤</span>

            <span className='pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-md bg-[#042c51] px-3 py-2 text-xs font-bold uppercase tracking-wide text-white opacity-0 shadow-lg transition group-hover:opacity-100'>
              Sign In
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='border-t border-white/10 bg-white/[0.05] backdrop-blur-md lg:hidden'>
          <div className='mx-auto max-w-7xl px-6 py-4'>
            <div className='flex flex-col gap-3'>
              {links.map(link => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href)

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-full border px-4 py-2 text-sm font-bold uppercase tracking-wide shadow-sm backdrop-blur-sm transition ${
                      isActive
                        ? 'border-[#0a4eb6] bg-white/55 text-[#0a4eb6]'
                        : 'border-transparent bg-white/25 text-[#042c51] hover:border-[#0a4eb6]/40 hover:bg-white/45 hover:text-[#0a4eb6]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href='/quote-now'
                onClick={handleLinkClick}
                className={`rounded-full border px-6 py-2 text-sm font-bold uppercase shadow-sm transition ${
                  pathname.startsWith('/quote-now')
                    ? 'border-[#0a4eb6] bg-white/55 text-[#0a4eb6]'
                    : 'border-[#18aeea] bg-[#18aeea] text-white hover:bg-[#0a4eb6]'
                }`}
              >
                Quote Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav

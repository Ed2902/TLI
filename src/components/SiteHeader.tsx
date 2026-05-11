'use client'

import { usePathname } from 'next/navigation'
import { Nav } from './Nav'

export function SiteHeader() {
  const pathname = usePathname()

  if (pathname === '/') {
    return null
  }

  return <Nav />
}

export default SiteHeader

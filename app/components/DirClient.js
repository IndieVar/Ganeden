"use client"

import { useEffect } from 'react'

export default function DirClient({ locale }) {
  useEffect(() => {
    const dir = locale === 'he' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', locale)
    document.body.classList.toggle('rtl', dir === 'rtl')
    return () => {
      // cleanup if needed — leave attributes as-is
    }
  }, [locale])

  return null
}

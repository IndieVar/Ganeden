"use client"
import { useEffect } from 'react'
import { getConsent } from './ConsentBanner'

function injectGtag(id) {
  if (!id) return
  if (document.querySelector(`script[data-gtag-id="${id}"]`)) return

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  s.setAttribute('data-gtag-id', id)
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', id, { anonymize_ip: true })
}

export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    const onChange = () => {
      const consent = getConsent()
      if (consent === 'granted' && id) {
        injectGtag(id)
      }
    }

    // initial check
    onChange()

    window.addEventListener('storage', onChange)
    return () => window.removeEventListener('storage', onChange)
  }, [id])

  return null
}

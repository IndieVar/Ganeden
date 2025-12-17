"use client"
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

const STORAGE_KEY = 'ga_consent'

export function getConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value)
    // trigger storage event for other tabs
    window.dispatchEvent(new StorageEvent('storage', { key: STORAGE_KEY, newValue: value }))
  } catch {}
}

export default function ConsentBanner() {
  const [consent, setConsentState] = useState(null)
  const t = useTranslations('consent')

  useEffect(() => {
    const existing = getConsent()
    setConsentState(existing)
  }, [])

  if (consent === 'granted' || consent === 'denied') return null

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[min(980px,calc(100%-32px))] bg-white border rounded-lg shadow-lg p-4 flex flex-col sm:flex-row  gap-4 items-center justify-between">
      <div className="text-sm text-gray-700">{t('banner')}</div>
      <div className="flex gap-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 cursor-pointer text-gray-900 px-3 py-1 rounded text-sm"
          onClick={() => { setConsent('denied'); setConsentState('denied') }}
        >{t('decline')}</button>
        <button
          className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-3 py-1 rounded text-sm"
          onClick={() => { setConsent('granted'); setConsentState('granted') }}
        >{t('accept')}</button>
      </div>
    </div>
  )
}


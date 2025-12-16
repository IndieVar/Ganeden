'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './languageSwitcher'
import Link from 'next/link'
import Image from 'next/image'

const logotypeUrl = "/Gan_eden_logotype_v2.png"



export default function Header(params) {
  const t = useTranslations('nav')
  const locale = params.locale || 'ru'

  const navigation = [
    { name: t('home'), href: [`/${locale}`, '/'] },
    { name: t('gallery'), href: [`/${locale}/gallery`, '/gallery'] },
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (item) => (
    item.href.includes(pathname)
  )

  return (
    <header className="bg-white">
      <_NavBar setMobileMenuOpen={setMobileMenuOpen} pathname={pathname} t={t} navigation={navigation} locale={locale} isActive={isActive} />
      <_HiddenMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} pathname={pathname} t={t} navigation={navigation} locale={locale} isActive={isActive} />
    </header>
  )
}

function _NavBar({ setMobileMenuOpen, pathname, t, navigation, locale, isActive }) {
  return (
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
      <div className="flex flex-1">
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href[0]}
              className={`text-sm/6 font-semibold text-gray-900 hover:underline ${isActive(item) ? 'underline' : ''}`}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{t('openMenu')}</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>
      <Link href={`/${locale}`} className="-m-1.5 p-1.5">
        <span className="sr-only">{t('logoAlt')}</span>
        <Image
          width={200}
          height={80}
          src={logotypeUrl}
          alt={t('logoAlt')}
          className='h-auto w-full px-12 lg:px-6 py-4'
        />
      </Link>
      <div className="flex flex-1 justify-end">
        <div className="hidden md:flex md:items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </nav >
  )
}

function _HiddenMenu({ mobileMenuOpen, setMobileMenuOpen, pathname, t, navigation, locale, isActive }) {
  return (
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-2 py-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-1">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">{t('closeMenu')}</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <Link
            href={`/${locale}`}
            className="-m-1.5 p-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">{t('logoAlt')}</span>
            <Image
              width={200}
              height={70}
              src={logotypeUrl}
              alt={t('logoAlt')}
              className='h-auto w-full px-12 lg:px-6 py-4'
            />
          </Link>
          <div className="flex flex-1 justify-end"></div>
        </div>
        <div className="mt-6 space-y-2 px-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href[0]}
              onClick={() => setMobileMenuOpen(false)}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-100 ${isActive(item) ? 'bg-gray-100' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      </DialogPanel>
    </Dialog>
  )
}



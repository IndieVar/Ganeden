'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './languageSwitcher'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Фотогалерея', href: '/gallery' },
]

const logotypeUrl = "/Gan_eden_logotype.png"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white">
      <_DesktopMenu setMobileMenuOpen={setMobileMenuOpen} pathname={pathname} />
      <_MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} pathname={pathname} />
    </header>
  )
}

function _DesktopMenu({ setMobileMenuOpen, pathname }) {
  return (
    <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
      <div className="flex flex-1">
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm/6 font-semibold text-gray-900 hover:underline ${pathname === item.href ? 'underline' : ''}`}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </div>
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Gan&Eden</span>
        <Image
          width={200}
          height={70}
          src={logotypeUrl}
          alt="Gan Eden logotype"
        />
      </Link>
      <div className="flex flex-1 justify-end">
        <div className="hidden md:flex md:items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

function _MobileMenu({ mobileMenuOpen, setMobileMenuOpen, pathname }) {
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
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <Link
            href="/"
            className="-m-1.5 p-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Gan Eden</span>
            <Image
              width={200}
              height={70}
              src={logotypeUrl}
              alt="Gan Eden logotype"
            />
          </Link>
          <div className="flex flex-1 justify-end"></div>
        </div>
        <div className="mt-6 space-y-2 px-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-100 ${pathname === item.href ? 'bg-gray-100' : ''}`}
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



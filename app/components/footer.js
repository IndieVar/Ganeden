import Link from "next/link";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { useTranslations } from 'next-intl'
import LanguageSwitcher from "./languageSwitcher";

const navigation = [
  {
    name: 'WhatsApp',
    href: 'whatsapp://send?phone=972504794997',
    icon: FaWhatsapp,
    style: 'size-7 hover:text-green-700',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ganedenash',
    icon: FaFacebook,
    style: 'size-6 hover:text-blue-700',
  },

]

export default function Footer() {
  const t = useTranslations()
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 ">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className={item.style} />
            </Link>
          ))}
        </div>
        <div className="flex justify-center my-4 md:my-0 md:order-1">
          <LanguageSwitcher className="mx-auto md:order-1" />
        </div>
        <p className="text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          {t('footer.copy', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}

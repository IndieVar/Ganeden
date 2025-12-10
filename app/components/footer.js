import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";

const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ganedenash',
    icon: FaFacebook,
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} Gan&Eden. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

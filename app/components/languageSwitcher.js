"use client"
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const t = useTranslations('language')

  const segments = pathname.split('/')
  const current = segments[1] || 'ru'

  function changeLocale(e) {
    const next = e.target.value
    const parts = pathname.split('/')
    if (parts[1] === 'ru' || parts[1] === 'he') {
      parts[1] = next
    } else {
      parts.splice(1, 0, next)
    }
    const nextPath = parts.join('/') || `/${next}`
    router.push(nextPath)
  }

  return (
    <div className='flex items-center'>
      <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
        <LanguageIcon className="inline size-5 ltr:mr-1 rtl:ml-1 text-gray-700" />
      </label>
      <div className="grid grid-cols-1">
        <select
          id="location"
          name="location"
          value={current}
          onChange={changeLocale}
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
        >
          <option value="ru">{t('ru')}</option>
          <option value="he">{t('he')}</option>
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 ltr:mr-2 rtl:ml-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        />
      </div>
    </div>
  )
}
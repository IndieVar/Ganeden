import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { LanguageIcon } from '@heroicons/react/24/outline'

export default function LanguageSwitcher() {
  return (
    <div className='flex items-center'>
      <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">
        <LanguageIcon className="inline size-5 mr-1 text-gray-700" />
      </label>
      <div className="grid grid-cols-1">
        <select
          id="location"
          name="location"
          defaultValue="Canada"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm/6"
        >
          <option>Русский</option>
          <option>עִברִית</option>
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        />
      </div>
    </div>
  )
}
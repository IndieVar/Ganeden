import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = ['ru', 'he'].includes(requested) ? requested : 'ru'
  const messages = (await import(`../../locales/${locale}.json`)).default
  return { locale, messages }
})


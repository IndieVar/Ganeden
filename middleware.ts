// middleware.ts
import createMiddleware from 'next-intl/middleware';
import {i18n} from './i18n'; // Assuming you have these defined

export default createMiddleware({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'as-needed', // This is key
});


export const config = {
    matcher: ['/((?!_next|.*\\..*).*)']
};
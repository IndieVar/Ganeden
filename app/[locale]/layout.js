import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import {NextIntlClientProvider} from 'next-intl';
import ruMessages from '../../locales/ru.json'
import heMessages from '../../locales/he.json'
import DirClient from '../components/DirClient';
import JsonLd from '../components/JsonLd';
import ConsentBanner from '../components/ConsentBanner';
import Analytics from '../components/Analytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "hebrew"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "hebrew"],
});

// Per-locale metadata is generated in `generateMetadata` below

export default async function RootLayout({ children, params }) {
  const { locale } = await params
  const messages = locale === 'he' ? heMessages : ruMessages

  return (
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <JsonLd locale={locale} messages={messages} />
          <Header locale={locale} />
          <DirClient locale={locale} />
          <Analytics />
          <ConsentBanner />
          {children}
          <ScrollToTop />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const messages = locale === 'he' ? heMessages : ruMessages
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const localeUrl = `${siteUrl}/${locale}`

  return {
    title: messages.layout.title,
    description: messages.layout.description,
    alternates: {
      canonical: localeUrl,
      languages: {
        ru: `${siteUrl}/ru`,
        he: `${siteUrl}/he`,
      },
    },
    openGraph: {
      title: messages.layout.title,
      description: messages.layout.description,
      url: localeUrl,
      siteName: 'Gan&Eden',
      images: [
        {
          url: `${siteUrl}/og-default.svg`,
          width: 1200,
          height: 630,
          alt: messages.layout.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.layout.title,
      description: messages.layout.description,
      images: [`${siteUrl}/og-default.svg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

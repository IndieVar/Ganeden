import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrollToTop";
import {NextIntlClientProvider} from 'next-intl';
import ruMessages from '../../locales/ru.json'
import heMessages from '../../locales/he.json'
import DirClient from '../components/DirClient';

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
          <Header locale={locale} />
          <DirClient locale={locale} />
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
  return {
    title: messages.layout.title,
    description: messages.layout.description,
  }
}

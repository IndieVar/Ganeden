import ReviewsSection from "../pages/home/reviewsSection";
import HeroSection from "../pages/home/heroSection";
import ServicesSection from "../pages/home/servicesSection";
import WasBecameSection from "../pages/home/wasBecameSection";
import AboutSection from "../pages/home/aboutSection";
import FAQSection from "../pages/home/faqSection";
import ruMessages from '../../locales/ru.json'
import heMessages from '../../locales/he.json'
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const messages = locale === 'he' ? heMessages : ruMessages
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const pageUrl = `${siteUrl}/${locale}`

  return {
    title: `${messages.hero.title} — ${messages.layout.title}`,
    description: messages.hero.lead || messages.layout.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${messages.hero.title} — ${messages.layout.title}`,
      description: messages.hero.lead || messages.layout.description,
      url: pageUrl,
      images: [{ url: `${siteUrl}/og-default.svg`, alt: messages.hero.title }],
    },
  }
}


export default function HomePage() {
  return (
    <main className="relative bg-white pb-20 overflow-hidden">
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }]} />
      <HeroSection />
      <AboutSection />
      <WasBecameSection />
      <ServicesSection />
      <ReviewsSection />
      <FAQSection />
    </main>
  )
}






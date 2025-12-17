import ruMessages from '../../../locales/ru.json'
import heMessages from '../../../locales/he.json'
import GallerySection from '../../pages/gallery/gallerySection'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const messages = locale === 'he' ? heMessages : ruMessages
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const pageUrl = `${siteUrl}/${locale}/gallery`

  return {
    title: `${messages.gallery.title} — ${messages.layout.title}`,
    description: messages.gallery.subtitle || messages.layout.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${messages.gallery.title} — ${messages.layout.title}`,
      description: messages.gallery.subtitle || messages.layout.description,
      url: pageUrl,
      images: [{ url: `${siteUrl}/og-default.svg`, alt: messages.gallery.title }],
    },
  }
}

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Gallery', url: '/gallery' }]} />
      <GallerySection />
    </>
  )
}

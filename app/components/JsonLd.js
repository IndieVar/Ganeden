// Server component: emits JSON-LD structured data for Organization + Website
export default function JsonLd({ locale, messages }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Gan&Eden",
    "url": siteUrl,
    "description": messages.layout?.description || undefined,
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": messages.layout?.title || 'Gan&Eden',
    "publisher": { "@id": `${siteUrl}/#organization` },
  }

  const json = JSON.stringify([org, website])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}

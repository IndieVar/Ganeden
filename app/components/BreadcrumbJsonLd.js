export default function BreadcrumbJsonLd({ items = [] }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const list = items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
  }))
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list,
  })
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}

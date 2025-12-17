import { NextResponse } from 'next/server'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export async function GET() {
  const urls = [
    `${siteUrl}/ru`,
    `${siteUrl}/he`,
    `${siteUrl}/ru/gallery`,
    `${siteUrl}/he/gallery`,
  ]

  const lastmod = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `<url><loc>${url}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`
      )
      .join('\n')}
  </urlset>`

  return new NextResponse(xml, {
    headers: { 'content-type': 'application/xml' },
  })
}

import { NextResponse } from 'next/server'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export async function GET() {
  const txt = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
  return new NextResponse(txt, {
    headers: { 'content-type': 'text/plain' },
  })
}

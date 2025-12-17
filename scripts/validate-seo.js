const fs = require('fs')
const path = require('path')

const localesDir = path.join(__dirname, '..', 'locales')
const defaultOg = path.join(__dirname, '..', 'public', 'og-default.svg')

function fail(msg) {
  console.error('\x1b[31m%s\x1b[0m', '✖ ' + msg)
  process.exitCode = 1
}

function ok(msg) {
  console.log('\x1b[32m%s\x1b[0m', '✔ ' + msg)
}

// 1. Check locales exist and include layout.title & layout.description
const files = fs.readdirSync(localesDir).filter(f => f.endsWith('.json'))
if (files.length === 0) fail('No locale files found in /locales')

files.forEach(file => {
  const content = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf8'))
  if (!content.layout || !content.layout.title || !content.layout.description) {
    fail(`${file} is missing layout.title or layout.description`)
  } else {
    ok(`${file} contains title & description`)
  }
})

// 2. Check default OG image exists
if (!fs.existsSync(defaultOg)) {
  fail('Missing default social image at public/og-default.svg')
} else {
  ok('Found public/og-default.svg')
}

// 3. Remind about NEXT_PUBLIC_SITE_URL
if (!process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn('\x1b[33m%s\x1b[0m', '⚠ NEXT_PUBLIC_SITE_URL is not set — sitemap and canonical urls will use https://example.com')
} else {
  ok('NEXT_PUBLIC_SITE_URL is set')
}

if (process.exitCode === 1) {
  console.error('\nOne or more SEO checks failed.')
  process.exit(1)
}

console.log('\nAll quick SEO checks passed.')

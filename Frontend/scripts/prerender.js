import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import process from 'node:process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.resolve(__dirname, '../dist')
const indexHtmlPath = path.join(distDir, 'index.html')

if (!fs.existsSync(indexHtmlPath)) {
  console.error('Error: dist/index.html does not exist. Run vite build first.')
  process.exit(1)
}

const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8')

const SITE_URL = 'https://www.srikrishnatour.in'

const routes = [
  {
    path: '/services',
    dir: 'services',
    title: 'Travel Services & Taxi Hire in Ranchi | Sri Krishna Tour and Adventures',
    description:
      'Explore reliable travel services in Ranchi: outstation taxi service, curated tour packages, hotel bookings, weekend adventure trips, group travel, and 24/7 on-trip assistance.',
    keywords:
      'taxi services Ranchi, car hire Ranchi, outstation cab Ranchi, hotel booking Jharkhand, tour packages Ranchi, group tour travel agency, cab booking Ranchi',
    breadcrumbName: 'Services',
  },
  {
    path: '/reviews',
    dir: 'reviews',
    title: 'Customer Reviews & Ratings | Sri Krishna Tour and Adventures',
    description:
      'Read authentic customer reviews for Sri Krishna Tour and Adventures. Rated 4.9/5 by travelers for polite drivers, clean cars, punctual service, and memorable itineraries.',
    keywords:
      'Sri Krishna Tour reviews, Ranchi travel agency ratings, best taxi service Ranchi feedback, trusted tour operator Jharkhand',
    breadcrumbName: 'Reviews',
  },
  {
    path: '/experiences',
    dir: 'experiences',
    title: 'Past Customer Experiences & Travel Stories | Sri Krishna Tour and Adventures',
    description:
      'Discover memorable travel stories from our guests: spiritual family pilgrimages, scenic Netarhat hill trips, and corporate outings planned seamlessly in Jharkhand.',
    keywords:
      'Netarhat trip experience, spiritual tour Baidyanath dham, corporate travel Ranchi, Jharkhand tour stories, travel memories Ranchi',
    breadcrumbName: 'Experiences',
  },
  {
    path: '/contact',
    dir: 'contact',
    title: 'Contact Us | Book Taxi & Tour Packages in Ranchi - Call 9563526445',
    description:
      'Contact Sri Krishna Tour and Adventures in Ranchi, Jharkhand. Call +91 9563526445 for immediate taxi booking, family tour packages, outstation cabs, and custom trip planning.',
    keywords:
      'contact Sri Krishna Tour, cab booking number Ranchi, travel agency phone Ranchi, book taxi Jharkhand, Ranchi travel contact',
    breadcrumbName: 'Contact Us',
  },
]

console.log('Generating static pre-rendered HTML files for SPA SEO...')

for (const route of routes) {
  const fullUrl = `${SITE_URL}${route.path}`
  let html = baseHtml

  // Update <title>
  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  )

  // Update meta name="title"
  html = html.replace(
    /<meta\s+name="title"\s+content=".*?"\s*\/?>/i,
    `<meta name="title" content="${route.title}" />`
  )

  // Update meta name="description"
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  )

  // Update meta name="keywords"
  html = html.replace(
    /<meta\s+name="keywords"\s+content=".*?"\s*\/?>/i,
    `<meta name="keywords" content="${route.keywords}" />`
  )

  // Update canonical
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${fullUrl}" />`
  )

  // Update og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  )

  // Update og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  )

  // Update og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${fullUrl}" />`
  )

  // Update twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  )

  // Update twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  )

  // Inject Breadcrumb Schema
  const breadcrumbJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: route.breadcrumbName,
        item: fullUrl,
      },
    ],
  })

  const breadcrumbTag = `\n    <!-- Page Breadcrumb Schema -->\n    <script type="application/ld+json">${breadcrumbJson}</script>\n  </head>`
  html = html.replace('</head>', breadcrumbTag)

  const targetDir = path.join(distDir, route.dir)
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  const targetFile = path.join(targetDir, 'index.html')
  fs.writeFileSync(targetFile, html, 'utf8')
  console.log(`✓ Generated ${route.path} -> dist/${route.dir}/index.html`)
}

console.log('Static route prerendering complete! All routes are indexable by all crawlers.')

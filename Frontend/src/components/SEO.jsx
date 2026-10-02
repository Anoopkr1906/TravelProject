import { useEffect } from 'react'
import { SITE_URL } from '../seoConfig'

function setOrCreateMeta(selector, attributeName, attributeValue, content) {
  let element = document.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attributeName, attributeValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setOrCreateLink(rel, href) {
  let link = document.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

/**
 * Dynamic SEO component that updates document head tags and injects BreadcrumbList JSON-LD
 */
export default function SEO({
  title,
  description,
  keywords,
  path = '',
  breadcrumbName,
}) {
  useEffect(() => {
    const fullUrl = `${SITE_URL}${path}`

    // Update document title
    if (title) {
      document.title = title
      setOrCreateMeta('meta[name="title"]', 'name', 'title', title)
      setOrCreateMeta('meta[property="og:title"]', 'property', 'og:title', title)
      setOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    }

    // Update description
    if (description) {
      setOrCreateMeta('meta[name="description"]', 'name', 'description', description)
      setOrCreateMeta('meta[property="og:description"]', 'property', 'og:description', description)
      setOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    }

    // Update keywords
    if (keywords) {
      setOrCreateMeta('meta[name="keywords"]', 'name', 'keywords', keywords)
    }

    // Update canonical link & og:url
    setOrCreateLink('canonical', fullUrl)
    setOrCreateMeta('meta[property="og:url"]', 'property', 'og:url', fullUrl)

    // Dynamic Breadcrumb Schema
    let breadcrumbScript = document.getElementById('dynamic-breadcrumb-schema')
    if (breadcrumbName && path !== '/') {
      const breadcrumbData = {
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
            name: breadcrumbName,
            item: fullUrl,
          },
        ],
      }

      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script')
        breadcrumbScript.id = 'dynamic-breadcrumb-schema'
        breadcrumbScript.type = 'application/ld+json'
        document.head.appendChild(breadcrumbScript)
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData)
    } else if (breadcrumbScript) {
      breadcrumbScript.remove()
    }

    // Scroll to top on route change for best UX
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [title, description, keywords, path, breadcrumbName])

  return null
}

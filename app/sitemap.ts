import type { MetadataRoute } from 'next'
import { SERVICES, NEIGHBORHOODS } from '@/lib/constants'

export const dynamic = 'force-static'

const BASE = 'https://garagedoorrepairscoralsprings.us'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    '',
    '/services',
    '/areas',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ]

  return [
    ...staticPages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    ...SERVICES.map((s) => ({
      url: `${BASE}${s.url}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...NEIGHBORHOODS.map((n) => ({
      url: `${BASE}${n.url}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}

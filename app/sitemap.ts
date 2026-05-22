import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.historiadodia.com'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/eventos`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/civilizacoes`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/personagens`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/categorias`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/categorias/guerras`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/categorias/descobertas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/linha-do-tempo`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ]
}

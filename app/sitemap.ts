import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ai-base.one'
  
  const routes = [
    '',
    '/github',
    '/guides',
    '/hermes',
    '/networking',
    '/pirate-bay',
    '/rules',
    '/services',
    '/shitposting',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}

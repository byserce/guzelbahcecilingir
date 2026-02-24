import { MetadataRoute } from 'next'
import { CILINGIR_DOMAIN, neighborhoods } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/hakkimizda',
    '/gizlilik-politikasi',
  ].map((route) => ({
    url: `https://${CILINGIR_DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: route === '/' ? 1 : 0.8,
  }));

  const dynamicRoutes = neighborhoods.map((mahalle) => ({
    url: `https://${CILINGIR_DOMAIN}/cilingir/${mahalle}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}

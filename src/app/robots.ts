import { MetadataRoute } from 'next';
import { CILINGIR_DOMAIN } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `https://${CILINGIR_DOMAIN}/sitemap.xml`,
  };
}

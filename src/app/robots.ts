import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Don't let Google index private areas
    },
    sitemap: 'https://www.dreptec.com/sitemap.xml',
  }
}
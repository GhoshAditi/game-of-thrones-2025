import type { MetadataRoute } from 'next';

// To help search engine crawlers crawl your site more efficiently.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://got.rcciit.org.in',
      lastModified: new Date(),
    },
    {
      url: 'http://got.rcciit.org.in/events',
      lastModified: new Date(),
    },
    {
      url: 'http://got.rcciit.org.in/gallery',
      lastModified: new Date(),
    },
    {
      url: 'http://got.rcciit.org.in/contacts',
      lastModified: new Date(),
    },
    {
      url: 'http://got.rcciit.org.in/team',
      lastModified: new Date(),
    },
  ];
}

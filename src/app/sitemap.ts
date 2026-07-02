import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dentalarenarajshahi.com'; // Placeholder URL

  const routes = [
    '',
    '/root-canal-treatment',
    '/dental-implants',
    '/clear-aligners-diastema-closure',
    '/pricing',
    '/doctors',
    '/faq',
    '/contact',
    '/privacy-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}

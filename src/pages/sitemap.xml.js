import { getCollection } from 'astro:content';

export async function GET() {
  const site = 'https://cyberitdad.xyz';

  const posts = await getCollection('blog');
  const projects = await getCollection('projects');

  const pages = [
    { loc: site, lastmod: new Date().toISOString().slice(0, 10) },
    { loc: `${site}/about`, lastmod: new Date().toISOString().slice(0, 10) },
    { loc: `${site}/blog`, lastmod: new Date().toISOString().slice(0, 10) },
    { loc: `${site}/projects`, lastmod: new Date().toISOString().slice(0, 10) },
    { loc: `${site}/experience`, lastmod: new Date().toISOString().slice(0, 10) },
    { loc: `${site}/contact`, lastmod: new Date().toISOString().slice(0, 10) },
    ...posts.map(p => ({
      loc: `${site}/blog/${p.slug}`,
      lastmod: (p.data.updated || p.data.date).toISOString().slice(0, 10),
    })),
    ...projects.map(p => ({
      loc: `${site}/projects/${p.slug}`,
      lastmod: p.data.date.slice(0, 10),
    })),
  ];

  const urlEntries = pages
    .map(p => `  <url>\n    <loc>${p.loc}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

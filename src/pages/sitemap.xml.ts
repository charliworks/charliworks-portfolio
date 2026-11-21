import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { sortWork } from '../lib/work';
import { sitemapUrls, sitemapXml } from '../lib/seo';

export const GET: APIRoute = async ({ site }) => {
  const work = sortWork(await getCollection('work'));
  const xml = sitemapXml(
    sitemapUrls(
      site!,
      work.map((e) => e.id),
    ),
  );
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

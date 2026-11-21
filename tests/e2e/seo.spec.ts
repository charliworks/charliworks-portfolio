import { test, expect } from '@playwright/test';
import { site } from '../../src/site';

test.describe('search', () => {
  test('Home title and description', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toContain(site.name);
    expect(title.toLowerCase()).toContain('charliworks');
    expect(title.length).toBeLessThan(60);
    const description = await page
      .locator('meta[name=description]')
      .getAttribute('content');
    expect(description?.length).toBeGreaterThan(50);
    expect(description!.length).toBeLessThan(155);
  });

  test('case study title is "<Project> · <name>"', async ({ page }) => {
    await page.goto('/work/habi/');
    await expect(page).toHaveTitle(`Habi · ${site.name}`);
  });

  test('Home has Person and WebSite JSON-LD', async ({ page }) => {
    await page.goto('/');
    const raw = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    const graph = JSON.parse(raw ?? '{}')['@graph'];
    const person = graph.find(
      (n: { '@type': string }) => n['@type'] === 'Person',
    );
    const website = graph.find(
      (n: { '@type': string }) => n['@type'] === 'WebSite',
    );
    expect(person.name).toBe(site.name);
    expect(person.sameAs).toContain(`https://github.com/${site.github}`);
    expect(person.sameAs).toContain(site.brand.url);
    expect(website.name).toBe('charliworks');
  });

  test('sitemap lists Home and the case study, not the 404', async ({
    request,
  }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.ok()).toBe(true);
    const xml = await res.text();
    expect(xml).toContain(
      '<loc>https://charliworks-portfolio.pages.dev/</loc>',
    );
    expect(xml).toContain(
      '<loc>https://charliworks-portfolio.pages.dev/work/habi/</loc>',
    );
    expect(xml).not.toContain('404');
  });

  test('robots.txt names the sitemap', async ({ request }) => {
    const res = await request.get('/robots.txt');
    expect(res.ok()).toBe(true);
    expect(await res.text()).toContain(
      'Sitemap: https://charliworks-portfolio.pages.dev/sitemap.xml',
    );
  });
});

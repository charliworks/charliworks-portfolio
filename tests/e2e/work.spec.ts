import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const SECTIONS = [
  'The problem',
  'What Habi does',
  'The rules it follows',
  'How I built it',
  'How it shipped',
  'Links',
];

test.describe('work/habi', () => {
  test('habi page has the title as h1', async ({ page }) => {
    await page.goto('/work/habi/');
    await expect(page.locator('h1')).toContainText('Habi');
  });

  test('habi page has the sections in order', async ({ page }) => {
    await page.goto('/work/habi/');
    const headings = await page.locator('main h2').allTextContents();
    const expected = headings.includes('What I learned')
      ? [...SECTIONS.slice(0, 5), 'What I learned', 'Links']
      : SECTIONS;
    expect(headings.map((h) => h.trim())).toEqual(expected);
  });

  test('habi page links to the repo', async ({ page }) => {
    await page.goto('/work/habi/');
    await expect(
      page.locator('a[href="https://github.com/charlitomecarez/habi"]').first(),
    ).toBeVisible();
  });

  test('banner caption says the screens show sample data', async ({ page }) => {
    await page.goto('/work/habi/');
    await expect(page.getByText('Screens show sample data.')).toBeVisible();
  });

  test('cover image has alt text and dimensions', async ({ page }) => {
    await page.goto('/work/habi/');
    const img = page.locator('main img').first();
    expect((await img.getAttribute('alt'))?.trim()).toBeTruthy();
    expect(await img.getAttribute('width')).toBeTruthy();
    expect(await img.getAttribute('height')).toBeTruthy();
  });

  test('unknown work URL shows 404', async ({ page }) => {
    const response = await page.goto('/work/nope/');
    expect(response?.status()).toBe(404);
    await expect(page.locator('a[href="/"]').first()).toBeVisible();
  });

  for (const path of ['/work/habi/', '/work/nope/']) {
    test(`no axe violations on ${path}`, async ({ page }) => {
      // The scroll fade-in leaves text half-faded at the screen edge; check the final colours.
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(path);
      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations).toEqual([]);
    });
  }
});

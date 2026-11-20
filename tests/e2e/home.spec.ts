import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { site } from '../../src/site';

test.describe('home', () => {
  test('has one h1 with the name', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h1')).toContainText('Charlito Jr Mecarez');
  });

  test('shows role and location line', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(site.role)).toBeVisible();
    await expect(page.getByText(site.role)).toContainText(
      '4 years of experience',
    );
  });

  test('does not show the open-to line', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(site.openTo)).toHaveCount(0);
  });

  test('shows a small cover image in each work row', async ({ page }) => {
    await page.goto('/');
    const img = page.locator('section[aria-labelledby="work"] li img');
    await expect(img).toHaveCount(1);
    await expect(img).toHaveAttribute('alt', /.+/);
    const box = await img.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(160);
  });

  test('links to the Habi case study', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href="/work/habi/"]')).toHaveCount(1);
  });

  test('shows the intro and the About text', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(site.intro ?? 'missing intro')).toBeVisible();
    const about = page.locator('section[aria-labelledby="about"] p');
    expect(await about.count()).toBeGreaterThan(1);
  });

  test('lists the tools by group', async ({ page }) => {
    await page.goto('/');
    const about = page.locator('section[aria-labelledby="about"]');
    for (const group of site.tools) {
      await expect(
        about.getByText(`${group.label}: ${group.items.join(', ')}.`),
      ).toBeVisible();
    }
  });

  test('shows the year of each work row', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.locator('section[aria-labelledby="work"] li time'),
    ).toHaveText('2026');
  });

  test('no empty or dead contact links', async ({ page }) => {
    await page.goto('/');
    const links = page.locator('footer a');
    expect(await links.count()).toBeGreaterThan(0);
    for (const href of await links.evaluateAll((els) =>
      els.map((el) => el.getAttribute('href')),
    )) {
      expect(href?.trim()).toBeTruthy();
    }
    if (!site.linkedin) {
      await expect(
        page.locator('footer a', { hasText: 'LinkedIn' }),
      ).toHaveCount(0);
    }
  });

  test('canonical uses the site URL', async ({ page }) => {
    await page.goto('/');
    const href = await page.locator('link[rel=canonical]').getAttribute('href');
    expect(href).toMatch(/^https:\/\/charliworks-portfolio\.pages\.dev/);
  });

  test('works without JavaScript', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await page.locator('a[href="/work/habi/"]').click();
    await expect(page).toHaveURL(/\/work\/habi\/$/);
    await context.close();
  });

  test('no axe violations', async ({ page }) => {
    await page.goto('/');
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});

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

  for (const [width, cut] of [
    [1280, 'wide'],
    [390, 'phone'],
  ] as const) {
    test(`shows one labelled cover or clip per work row at ${width}px (${cut})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');
      const media = page.locator(
        'section[aria-labelledby="work-h"] li :is(.proof img, .proof video):visible',
      );
      await expect(media).toHaveCount(1);
      const label =
        (await media.getAttribute('alt')) ??
        (await media.getAttribute('aria-label'));
      expect(label?.trim()).toBeTruthy();
    });
  }

  test('the clip has a working pause button', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('.proof [data-clip-toggle]');
    await toggle.scrollIntoViewIfNeeded();
    await expect(toggle).toHaveText('Pause video');
    await toggle.click();
    await expect(toggle).toHaveText('Play video');
    const paused = await page
      .locator('.proof [data-clip]')
      .evaluateAll((vs) => vs.every((v) => (v as HTMLVideoElement).paused));
    expect(paused).toBe(true);
  });

  test('links to the Habi case study', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('a[href="/work/habi/"]')).toHaveCount(1);
  });

  test('shows the intro and the About text', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(site.intro ?? 'missing intro')).toBeVisible();
    const about = page.locator('section[aria-labelledby="about-h"] p');
    expect(await about.count()).toBeGreaterThan(0);
  });

  test('lists the tools by group', async ({ page }) => {
    await page.goto('/');
    const tools = page.locator('section[aria-labelledby="tools-h"]');
    for (const group of site.tools) {
      await expect(tools.locator('dt', { hasText: group.label })).toBeVisible();
      await expect(
        tools.locator('dd', { hasText: group.items.join(' · ') }),
      ).toBeVisible();
    }
  });

  test('shows the year of each work row', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.locator('section[aria-labelledby="work-h"] li time'),
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
    // Let the opening lines finish rising before axe reads their colours.
    await page.waitForTimeout(2500);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});

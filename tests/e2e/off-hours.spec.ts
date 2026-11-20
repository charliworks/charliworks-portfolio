import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('off-hours', () => {
  test('About links to the off-hours page', async ({ page }) => {
    await page.goto('/');
    await page
      .locator('section[aria-labelledby="about"] a[href="/off-hours/"]')
      .click();
    await expect(page).toHaveURL(/\/off-hours\/$/);
    await expect(page.locator('h1')).toHaveText('Off hours');
  });

  test('shows the listening and playing lists', async ({ page }) => {
    await page.goto('/off-hours/');
    const tracks = page.locator('section[aria-labelledby="listening"] li');
    const games = page.locator('section[aria-labelledby="playing"] li');
    expect(await tracks.count()).toBeGreaterThan(0);
    expect(await games.count()).toBeGreaterThan(0);
    await expect(tracks.first().locator('time')).toHaveAttribute(
      'datetime',
      /.+/,
    );
  });

  test('says when it shows sample data', async ({ page }) => {
    await page.goto('/off-hours/');
    const note = page.locator('[data-todo]');
    if ((await note.count()) > 0) {
      await expect(note).toContainText('Sample data');
    }
  });

  test('no axe violations', async ({ page }) => {
    // The scroll fade-in leaves text half-faded at the screen edge; check the final colours.
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/off-hours/');
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
});

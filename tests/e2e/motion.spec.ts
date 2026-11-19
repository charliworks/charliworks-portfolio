import { test, expect } from '@playwright/test';

const toSeconds = (value: string) =>
  Math.max(
    ...value
      .split(',')
      .map((v) => v.trim())
      .map((v) => (v.endsWith('ms') ? parseFloat(v) / 1000 : parseFloat(v))),
  );

for (const path of ['/', '/work/habi']) {
  test(`reduced motion stops animation on ${path}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(path);
    const durations = await page.evaluate(() =>
      [...document.querySelectorAll('*')].map((el) => {
        const style = getComputedStyle(el);
        return [style.transitionDuration, style.animationDuration];
      }),
    );
    for (const [transition, animation] of durations) {
      expect(toSeconds(transition)).toBeLessThanOrEqual(0.01);
      expect(toSeconds(animation)).toBeLessThanOrEqual(0.01);
    }
  });
}

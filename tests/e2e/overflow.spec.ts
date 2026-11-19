import { test, expect } from '@playwright/test';

for (const path of ['/', '/work/habi', '/work/nope']) {
  test(`no sideways overflow at 320px with 200% text on ${path}`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    await page.goto(path);
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '200%';
    });
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });
}

import { test, expect } from '@playwright/test';

test('Homepage content validation', async ({ page }) => {

  await page.goto('https://example.com');

  // Validate heading
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Example Domain');

  // Validate paragraph exists
  await expect(page.locator('p')).toContainText('illustrative examples');

  // Capture screenshot for report/debug
  await page.screenshot({ path: 'homepage.png' });

});
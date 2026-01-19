import { test, expect } from '@playwright/test';

test('Verify login navigation', async ({ page }) => {

  // 1. Open website
  await page.goto('https://example.com');

  // 2. Validate title
  await expect(page).toHaveTitle(/Example Domain/);

  // 3. Click More information link
  await page.getByRole('link', { name: 'More information...' }).click();

  // 4. Validate URL change
  await expect(page).toHaveURL(/iana/);

});

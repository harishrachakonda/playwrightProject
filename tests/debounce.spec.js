import { test, expect } from '@playwright/test';

test('should debounce API calls in search input', async ({ page }) => {
  await page.route('**/api/search**', route => route.continue()); // mock if needed

  const requests = [];
  page.on('request', request => {
    if (request.url().includes('/api/search')) {
      requests.push(request);
    }
  });

  await page.goto('http://127.0.0.1:5500/practice/debounce.html');

  await page.fill('#search', '');
  await page.fill('#search', 'Google'); // simulate fast typing

  await page.waitForTimeout(500); // debounce delay + buffer

  expect(requests.length).toBe(1); // only one API call should be made
  expect(requests[0].url()).toContain('q=Google');
});

import { test, expect } from '@playwright/test';

test('test NoteMaker app', async ({ page }) => {
  await page.goto('https://app.eino.world/account/get-started?returnUrl=%2Fuser%2Fdashboard');
  await page.getByRole('button', { name: 'Deutsch' }).click();
  await page.locator('a').filter({ hasText: 'Englisch' }).click();
  await page.getByRole('tabpanel', { name: 'Sign In' }).locator('#email').click();
  await page.getByRole('tabpanel', { name: 'Sign In' }).locator('#email').fill('https://app.eino.world/account/get-started?returnUrl=%2Fuser%2Fdashboard');
  await page.getByRole('tabpanel', { name: 'Sign In' }).locator('#email').click();
  await page.getByRole('tabpanel', { name: 'Sign In' }).locator('#email').fill('einobarytechteam@gmail.com');
  await page.getByRole('textbox', { name: '* Password *Password' }).click();
  await page.getByRole('textbox', { name: '* Password *Password' }).fill('Automation@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
 // await page.getByRole('button', { name: 'Sign in again' }).click();
});
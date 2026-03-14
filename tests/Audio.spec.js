import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.eino.world/account/get-started?returnUrl=%2Fuser%2Fdashboard');
  await page.getByRole('button', { name: 'Deutsch' }).click();
  await page.locator('a').filter({ hasText: 'Englisch' }).click();
  await page.getByRole('tabpanel', { name: 'Sign In' }).locator('#email').click();
  await page.getByRole('tabpanel', { name: 'Sign In' }).locator('#email').fill('einobarytechteam@gmail.com');
  await page.getByRole('textbox', { name: '* Password *Password' }).click();
  await page.getByRole('textbox', { name: '* Password *Password' }).fill('Automation@12345');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button').nth(1).click();
  await page.locator('[data-test-id="resource-label"]').click();
  await page.locator('.ri-close-line.clear-icon').click();
  await page.getByRole('textbox', { name: 'Please insert a title.' }).fill('xy');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('a').filter({ hasText: 'Record an Audio' }).click();
  await page.getByTestId('resource-audio-start-recording-btn').click();
  await page.getByTestId('resource-audio-stop-recording-btn').click();
  await page.locator('#input-add-keywords').getByRole('combobox').click();
  await page.getByLabel('Options List').getByText('replacedthis').click();
  await page.locator('.p-ripple.p-element.p-button.p-component.p-button-icon-only.p-button-success').click();
});
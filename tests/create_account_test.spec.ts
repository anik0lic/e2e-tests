import { test, expect } from '@playwright/test';

test('creating account test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');

  await page.getByRole('link', { name: 'Create an Account' }).click();

  await page.getByLabel('First Name').fill('Andjela');
  await page.getByLabel('Last Name').fill('Nikolic');
  await page.getByLabel('Email', { exact: true }).fill('andjela1234@gmail.com');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Andjela1234');
  await page.getByLabel('Confirm Password').fill('Andjela1234');

  await page.getByRole('button', { name: 'Create an Account' }).click();
});
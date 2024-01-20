import { test, expect } from '@playwright/test';

test('buying items test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');

  await page.getByRole('link', { name: 'Sign In' }).click();

  await page.getByLabel('Email', { exact: true }).fill('andjela1234@gmail.com');
  await page.getByLabel('Password').fill('Andjela1234');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('link', { name: 'Radiant Tee' }).first().click();
  await page.getByLabel('M', { exact: true }).click();
  await page.getByLabel('Orange').click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();

  await page.getByRole('link', { name: ' My Cart 1 1\nitems' }).click();
  await page.getByRole('button', { name: 'Proceed to Checkout' }).click();

  await page.getByLabel('Street Address: Line 1').fill('Knez Mihailova 6');
  await page.getByLabel('City').fill('Beograd');
  await page.locator('select[name="region_id"]').selectOption({ label: 'New York' });
  await page.getByLabel('Zip/Postal Code').fill('11000');
  await page.getByLabel('Phone Number').fill('0691234567');
  await page.getByLabel('Fixed').click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('button', { name: 'Place Order' }).click();

});
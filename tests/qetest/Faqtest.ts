import {test,expect } from '@playwright/test'

import { faqPage } from '../../src/faqPage'


test.describe('All tests',()=>{

})

test('Clicking all links',async({page})=>{

    import { test, expect } from '@playwright/test';

    test('test', async ({ page }) => {
      await page.goto('https://stage.faq.bodi.com/');
      await page.getByRole('link', { name: 'My Shakeology' }).click();
      await page.getByText('Browse FAQs by Topic My ShakeologyChange Flavor or ServingChange Ship').click();
      await page.getByText('Browse FAQs by Topic My ShakeologyChange Flavor or ServingChange Ship').click();
      await page.getByText('My Shakeology').click();
      await page.getByRole('link', { name: 'BODi' }).click();
      await page.goto('https://stage.faq.bodi.com/');
      await page.getByRole('link', { name: 'Bike' }).click();
      await page.getByText('Browse FAQs by Topic BikeGetting StartedTroubleshooting and').click();
      await page.getByRole('link', { name: 'All Orders' }).click();
      await page.getByText('Browse FAQs by Topic All OrdersChange Flavor or ServingChange Ship DateStatus').click();
      await page.goto('https://stage.faq.bodi.com/');
      await page.getByRole('link', { name: 'My Account' }).click();
      await page.locator('div').filter({ hasText: /^Browse FAQs by Topic My Account$/ }).locator('div').nth(1).click();
      await page.getByText('Browse FAQs by Topic My AccountUpdate Address or Phone NumberDo Not Contact (On').click();
      await page.getByText('My Account').click();
      await page.getByText('My Account').click();
      await page.getByText('Browse FAQs by Topic My AccountUpdate Address or Phone NumberDo Not Contact (On').click();
      await page.getByRole('link', { name: 'Technical Support /' }).click();
      await page.getByText('Browse FAQs by Topic Technical Support / TroubleshootingBODiClear Cookies and').click();
      await page.getByRole('link', { name: 'Affiliate Partner Support' }).click();
      await page.getByText('Affiliate Partner Support').click();
      await page.goto('https://stage.faq.bodi.com/');
      await page.getByRole('link', { name: 'Product Info, Offers, and' }).click();
      await page.getByText('Browse FAQs by Topic Product Info, Offers, and ProgramsProgram Promos and').click();
    });
   

})

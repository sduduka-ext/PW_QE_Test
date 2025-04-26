// Inlcude playwright module
import { test, expect } from '@playwright/test';
//const { test, expect } = require('@playwright/test');
//const fs = require('fs');
import { faqPage } from '../../src/faqPage';

import { ENV } from "../../utils/env"; // Ensure the file exists at 'c:\QE_PW_Test\tests\utils\env.ts' or update the path accordingly
test.describe('Check URL and its links', async () => {

  test('Link Shop', async ({ page }) => {

    console.log(process.env.ENV + " >>>> Navigate - " + process.env.FAQ_URL + " with locale >>>" + process.env.locale);
    const faqPageInstance = new faqPage(page);
    await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');
    //  faqPageInstance.getAllLinks();
    await faqPageInstance.clickLinkShop();
    await faqPageInstance.navigateGoBack();
  });

  test('Link Stream', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    faqPageInstance.clickLinkStream();
    faqPageInstance.navigateGoBack();
  });
  test('Link Become an Affiliate', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    faqPageInstance.clickLinkBecomeAnAffiliate();
    faqPageInstance.navigateGoBack();
  });
  test('Link Manage Nutrition Subscription', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    faqPageInstance.clickLinkManageNutritionSubscription();

    await page.getByText('This site can’t be reached').click();
    faqPageInstance.navigateGoBack();
  });
  test('Link Manage Digital Membership', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    faqPageInstance.clickLinkManageDigitalMembership();
    await page.getByText('This site can’t be reached').click();
    faqPageInstance.navigateGoBack();
  });
  test('Order Status', async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    faqPageInstance.clickLinkOrderStatus();

    faqPageInstance.navigateGoBack();
    //  await page.goto('chrome-error://chromewebdata/');
    //   await page.getByText('This page isn’t working').click();
    //   await page.getByRole('link', { name: 'Return or Exchange' }).click();
    //   await page.goto('https://stage.faq.bodi.com/');
    //   await page.getByRole('link', { name: 'Update Account' }).click();
    //   await page.getByText('This site can’t be reached').click();
    //   await page.getByRole('link', { name: 'Update Payment Method' }).click();
    //   await page.getByRole('link', { name: 'Partner Forms' }).click();
    //   await page.getByRole('link', { name: 'Partner Forms' }).click();
  });
});
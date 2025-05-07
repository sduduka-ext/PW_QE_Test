// Inlcude playwright module
import { test, expect } from '@playwright/test';
//const { test, expect } = require('@playwright/test');
//const fs = require('fs');
import { faqPage } from "../../src/faqPage-globalNav";

import { ENV } from "../../utils/env"; // Ensure the file exists at 'c:\QE_PW_Test\tests\utils\env.ts' or update the path accordingly
test.describe('Check URL and its links', async () => {
  async function testUrl(page,url) {
    console.log(process.env.ENV + " >>>> Navigate - " + process.env.FAQ_URL + " with locale >>>" + process.env.locale);
    await page.navigateURL(url);
    await page.verifyBodiUrl();
    //    page.verifyBodiUrl(); // Removed as 'verifyBodiUrl' is not a method of 'Page'
  }
  test('Link Shop', { tag: "@sanity", },async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    //  faqPageInstance.getAllLinks();
    await testUrl (faqPageInstance, process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkShop();
    await faqPageInstance.navigateGoBack();
  });

  test('Link Stream', { tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    //  faqPageInstance.getAllLinks();
    await testUrl (faqPageInstance, process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkStream();
    await faqPageInstance.navigateGoBack();
  });
  test('Link Become an Affiliate', { tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    //  faqPageInstance.getAllLinks();
    await testUrl (faqPageInstance, process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkBecomeAnAffiliate();
    await faqPageInstance.navigateGoBack();
  });
  test('Link Manage Nutrition Subscription', { tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    //  faqPageInstance.getAllLinks();
    await testUrl (faqPageInstance, process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkManageNutritionSubscription();
    await faqPageInstance.waitPagePromise(5000);
    
    if(await page.getByText('This site can’t be reached').isVisible()){
      console.log('This site can’t be reached is visible');
      await page.getByText('This site can’t be reached').focus();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }
    await faqPageInstance.navigateGoBack();
  });
  test('Link Manage Digital Membership', { tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    //  faqPageInstance.getAllLinks();
    await testUrl (faqPageInstance, process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkManageDigitalMembership();
    await faqPageInstance.waitPagePromise(5000);
    if(await page.getByText('This site can’t be reached').isVisible()){
      console.log('This site can’t be reached is visible');
      await page.getByText('This site can’t be reached').focus();
    }
    else{
      console.log('This site can’t be reached is NOT visible');
    }
    await faqPageInstance.navigateGoBack();
});
  test('Order Status', { tag: "@sanity", }, async ({ page }) => {
    const faqPageInstance = new faqPage(page);
    //  faqPageInstance.getAllLinks();
    
    await testUrl (faqPageInstance, process.env.FAQ_URL || 'https://default-url.com');
    await faqPageInstance.clickLinkOrderStatus();
    await faqPageInstance.navigateGoBack();
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
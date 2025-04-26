// Inlcude playwright module
 import { test ,expect} from '@playwright/test';
//const { test, expect } = require('@playwright/test');
//const fs = require('fs');

test.describe('Check URL and its links', async () => {
  
    test('Link Shop', async ({ page }) => {
        console.log("Navigate - "+process.env.FAQ_URL+" with locale >>>"+process.env.locale);
        if(process.env.locale === "en_US")
        {
          await page.goto(process.env.FAQ_URL_enUS || 'https://default-url-en-us.com');
        }else
        {
          await page.goto(process.env.FAQ_URL || 'https://default-url.com');
        }
        const linksRef=await page.locator('a').evaluateAll(evalHref => evalHref.map(eh=> eh.getAttribute('href')));
          console.log("Links hrefs are >>> "+linksRef.length);
          for(let i=0; i<linksRef.length; i++)
          {
              console.log(i+" > Links hrefs are >>> "+linksRef[i]);
          }
          await page.getByRole('link', { name: 'Shop' }).click();
      
      });
    
      test('Link Stream', async ({ page }) => {
        await page.goto('https://stage.faq.bodi.com/');
        await page.getByRole('link', { name: 'Stream' }).click();
        //await page.getByTestId('unif_topNav_link_programs').click();
        await page.goBack()
      });
      test('Link Become an Affiliate', async ({ page }) => {
        await page.goto('https://stage.faq.bodi.com/');
        await page.getByRole('link', { name: 'Become an Affiliate' }).click();
        await page.locator('div:nth-child(49) > div > div > div > div > div > div > div > div > div:nth-child(2) > div').first().click();
        await page.getByRole('link', { name: 'Become an Affiliate' }).click();
      });
      test('Link Manage Nutrition Subscription', async ({ page }) => {
        await page.goto('https://stage.faq.bodi.com/');
        await page.getByRole('link', { name: 'Manage Nutrition Subscription' }).click();
        await page.getByText('This site can’t be reached').click();
      });
      test('Link Manage Digital Membership', async ({ page }) => {
          await page.goto('https://stage.faq.bodi.com/');
          await page.getByRole('link', { name: 'Manage Digital Membership' }).click();
          await page.getByText('This site can’t be reached').click();
        });
      test('Order Status', async ({ page }) => {
        await page.goto('https://stage.faq.bodi.com/');
        await page.getByRole('link', { name: 'Order Status' }).click();
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
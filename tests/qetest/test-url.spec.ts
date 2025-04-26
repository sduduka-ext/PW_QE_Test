// import { test, expect } from '@playwright/test';
// test.describe('Sanity Tests', async () => {
// test('Navigate to https://stage.faq.bodi.com/ for links present',{
//   tag: ['@C1223xyz', '@sanity'],},
//  async ({ page }) => {
//   console.log("Report Print - Start");
//   const fs = require('fs');
//   await page.goto('https://stage.faq.bodi.com/');
//   const linkRef1=await page.getByRole('link', { name: 'Manage Nutrition Subscription' }).getAttribute("href");
//   console.log("Manage Nutrition Subscription  link href  >>> "+linkRef1);
//   await page.getByRole('link', { name: 'Manage Nutrition Subscription' }).click();
//   //await page.locator('#content').click();
//   if(!page.getByText("This site can’t be reached").isVisible)
//   {
//     await page.getByText('This site can’t be reached').focus();
//     console.log("his site can’t be reached exists for Manage Nutrition Subscription link clicked");
//     // Take a screenshot as a buffer
//     const screenshotBuffer = await page.screenshot();
//     // Save it to a file in the current directory
//     fs.writeFileSync('./test-results/Manage Nutrition Subscription.png', screenshotBuffer);
//   }
//   else
//     console.log("his site can’t be reached doesn't exists for Manage Nutrition Subscription link clicked");
//   console.log("Report Print - 1");
//   await page.goto('https://stage.faq.bodi.com/');
//   await page.getByRole('link', { name: 'Manage Digital Membership' }).click();
//   if(!page.getByText("This site can’t be reached").isVisible())
//   {
//   await page.getByText('This site can’t be reached').focus();
//   console.log("his site can’t be reached exists for Manage Digital Membership link clicked");
//   // Take a screenshot as a buffer
//   const screenshotBuffer = await page.screenshot();
//   // Save it to a file in the current directory
//   fs.writeFileSync('./Manage Digital Membership.png', screenshotBuffer);
//   }
//   else
//     console.log("his site can’t be reached doesn't exists for Manage Digital Membership link clicked");
//   console.log("Report Print - 2");
//   await page.goto('https://stage.faq.bodi.com/');
//   await page.getByRole('link', { name: 'Order Status' }).click();
//   console.log("Report Print - 3");
//   await page.goto('https://stage.faq.bodi.com/');
//   await page.getByRole('link', { name: 'Shop' }).click();
//   console.log("Report Print - 4");
//   await expect(page.getByRole('button', { name: 'Join BODi' })).toBeVisible();
//   console.log("Report Print - End");
// });
// });
import { test, expect } from '@playwright/test';

test('Link Shop', async ({ page }) => {
  await page.goto('https://stage.faq.bodi.com/');
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
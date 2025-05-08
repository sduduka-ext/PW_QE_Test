// Inlcude playwright module
import { test, expect } from '@playwright/test';
import { faqPage } from "../../src/pages/faqPage-globalNav";
import { ENV } from "../../utils/env"; // Ensure the file exists at 'c:\QE_PW_Test\tests\utils\env.ts' or update the path accordingly
//import * as testData from '../../src/test-data/globalNav_td_stage_enUS.json';
test.describe('Check URL and its links', async () => {
    // Get the environment
    const environment = process.env.ENV || 'qa'; // Default to 'qa'
    //console.log("environment " + environment);
    // Get the locale
    const locale = process.env.LOCALE || 'enUS'; // Default to 'en-US'
    //console.log("locale " + locale);
    // Construct the path to the data file
    //const dataPath = `C:\\Users\\adm-sduduka-ext\\Documents\\PlayWright\\PW_QE_Test\\PW_QE_Test\\src\\test-data\\globalNav_td_stage_enUS.json`;
    const dataPath = `../../src/test-data/globalNav_td_${environment}_${locale}.json`;

    // Load the data
    const linkData = require(dataPath);

    test.beforeEach(async ({ page }) => {

        const faqPageInstance = new faqPage(page);
        console.log(environment + " >>>> Navigate - " + process.env.FAQ_URL + " with locale >>>" + locale);
        await faqPageInstance.navigateURL(process.env.FAQ_URL || 'https://default-url.com');


        await faqPageInstance.validatePageURLwithExpectedURL(process.env.FAQ_URL || 'https://default-url.com');
        await expect(page).toHaveTitle(/BODI/);
        await page.getByText('Welcome to BODi Support').isVisible();
        await faqPageInstance.verifySiteError();
        if (await page.getByRole('img', { name: 'Close this dialog' }).isVisible()) {
            console.log("before Clicking on the cookie dialog");
            await page.getByRole('img', { name: 'Close this dialog' }).click();

            //await page.getByRole('button', { name: 'Close this dialog' }).click();
            await faqPageInstance.waitPagePromise(5000);
            console.log("after Clicking on the cookie dialog");
        } else {
            console.log("Cookie dialog box is not visible");
        }
    });

    test('Link Shop', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await test.step('Navigate to Faq URL for ' + process.env.ENV + " validate link shop", async () => {

            console.log("verify " + test.name + " with TD expected url >> " + linkData.Shop_Link_URL);
            await faqPageInstance.clickLink_ValidateURL("shopLink", linkData.Shop_Link_URL);
        });

        await test.step('Verify Site Error', async () => {
            await faqPageInstance.verifySiteError();
        });
        // await test.step('Go Back to previous plage', async () => {
        //     await faqPageInstance.navigateGoBack();
        // });
    });

    test('Link Stream', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("streamLink", linkData.Stream_Link_URL);
        await faqPageInstance.verifySiteError();
        // await faqPageInstance.navigateGoBack();
    });
    test('Link Become an Affiliate', { tag: "@sanity", }, async ({ page }) => {

        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("becomeAnAffiliateLink", linkData.Become_An_Affiliate_Link_URL);
        await faqPageInstance.verifySiteError();
    });

    test('Link MyOrdersLink', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("myOrdersLink", linkData.MyOrders_Link_URL);
        await expect(page).toHaveTitle(/BODi Signin/);
        await faqPageInstance.verifySiteError();
    });

    test('Link Sign In link', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("clickSignIn", linkData.SignIn_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
    });

    test('Search box', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.enterSearchBox("Shakelogy");
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        await expect(page).toHaveURL(/.*faq?\.bodi.*/);
        await expect(page).toHaveTitle(/Results for/);
        await page.getByRole('heading', { name: 'Results for "Shakeology"' }).isVisible();
        //await faqPageInstance.navigateGoBack();
    });

    test('Link Manage Nutrition Subscription', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("manageNutritionSubscriptionLink", linkData.Manage_Nutrition_Subscription_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
    });
    test('Link Manage Digital Membership', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("manageDigitalMembershipLink", linkData.Manage_Digital_Membership_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
    });
    test('Link Order Status', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("orderStatusLink", linkData.Order_Status_Link_URL);
        // await faqPageInstance.clickLinkOrderStatus();
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });


    test('Link Return and Exchange Link', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("returnAndExchangeLink", linkData.Return_Or_Exchange_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });


    test('Link Update Account Link', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("updateAccountLink", linkData.Update_Account_Link_URL);
        //await faqPageInstance.clickUpdateAccountLink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });


    test('Link Update Payment Method Link', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("updatePaymentMethodLink", linkData.Update_Payment_Method_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });


    test('Link Partner Forms Link', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("partnerFormsLink", linkData.Partner_Forms_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });


    test('Link My Shakeology', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("myShakeologyLink", linkData.MyShakeology_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //      await faqPageInstance.navigateGoBack();
    });

    test('Link BODi', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("bodiLink", linkData.Bodi_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);
        // await faqPageInstance.navigateGoBack();
    });
    test('Link Bike', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("bikeLink", linkData.Bike_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await faqPageInstance.navigateGoBack();
    });
    test('Link All Orders', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("allOrdersLink", linkData.All_Orders_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        // await expect(page).toHaveTitle(/BODi Signin/);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });
    test('Link My Account', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("myAccountLink", linkData.My_Account_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);
        //await faqPageInstance.navigateGoBack();
    });
    test('Link Technical Support/Troubleshooting', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("technicalSupportLink", linkData.TechnicalSupport_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });
    test('Link Affiliate Partner Support', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("affiliatePartnerSupportLink", linkData.Affiliate_Partner_Support_Link_URL);
        //    await faqPageInstance.clickaffiliatelink();
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });
    test('Link Product Info Offers and Programs', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("productInfoLink", linkData.Productinfo_Offers_Programs_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });
    test('Link Chat with BODi', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("chatWithBodi", linkData.ChatWithBodi_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);
        //await faqPageInstance.navigateGoBack();
    });

    test('Link Sign in to Text with BODi', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("signInToText", linkData.SignIntoTextWithBodi_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);
        //await faqPageInstance.navigateGoBack();
    });

    test('Link Terms and Conditions', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("termsAndConditions", linkData.TermsAndConditions_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);
        // await faqPageInstance.navigateGoBack();
    });

    test('Link Privacy Policy', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("privacyPolicy", linkData.Privacy_Policy_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });

    test('Link Do Not Sell My Info', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("doNotSellMyInfo", linkData.DoNotSell_MyInfo_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });

    test('Link Accessibility Statement', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("accessibilityStatement", linkData.Accessibility_Stmt_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });

    test('Link California Supply Chain', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("californiaSupplyChain", linkData.California_SupplyChain_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        //await faqPageInstance.navigateGoBack();
    });
    test('Link Consumer Health Data Policy', { tag: "@sanity", }, async ({ page }) => {
        const faqPageInstance = new faqPage(page);
        await faqPageInstance.clickLink_ValidateURL("consumerHealthDataPolicy", linkData.Consumer_Health_Datapolicy_Link_URL);
        await faqPageInstance.waitPagePromise(5000);
        await faqPageInstance.verifySiteError();
        // await expect(page).toHaveTitle(/BODi Signin/);
        //await faqPageInstance.navigateGoBack();
    });
});
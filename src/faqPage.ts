import { expect, Page } from '@playwright/test';

export class faqPage {

    public cookieButton;
    public searchInput;
    public openSourceButton;
    public uxUiButton;
    public golangLink;
    public valesLink;
    public uxAppLink;
    public streamLink;
    public shopLink;
    public becomeAnAffiliateLink;
    public manageNutritionSubscriptionLink;
    public manageDigitalMembershipLink;
    public orderStatusLink;
    constructor(private page: Page) {
        this.cookieButton = this.page.getByRole('button', { name: 'Accept All Cookies' });
        this.searchInput = this.page.locator('input[id="resources-input"]');
        this.streamLink = this.page.getByRole('link', { name: 'Stream' });
        this.shopLink = this.page.getByRole('link', { name: 'Shop' });
        this.becomeAnAffiliateLink = this.page.getByRole('link', { name: 'Become an Affiliate' });
        this.manageNutritionSubscriptionLink = this.page.getByRole('link', { name: 'Manage Nutrition Subscription' });
        this.manageDigitalMembershipLink = this.page.getByRole('link', { name: 'Manage Digital Membership' });
        this.orderStatusLink = this.page.getByRole('link', { name: 'Order Status' });
        this.openSourceButton = this.page.getByRole('button', { name: 'Open source' });
        this.uxUiButton = this.page.getByRole('button', { name: 'UX & UI' });
        this.golangLink = this.page.locator('a[href="https://resources.codilime.com/golang-checklist/"]');
        this.valesLink = this.page.locator('a[href="https://codisec.com/veles/"]');
        this.uxAppLink = this.page.locator('a[href="https://events.codilime.com/ux-in-network-applications"]');
    }

    async navigateURL(url: string) {
        await this.page.goto(url);
    }

    async acceptCookies() {
        await this.cookieButton.click();
    }
    async navigateGoBack() {
        await this.page.goBack();
    }
    async clickLinkStream() {
        await this.streamLink.click();
    }
    async clickLinkShop() {
        await this.shopLink.click();
    }
    async clickLinkBecomeAnAffiliate() {
        await this.becomeAnAffiliateLink.click();
    }
    async clickLinkManageDigitalMembership() {
        await this.manageDigitalMembershipLink.click();
    }
    async clickLinkManageNutritionSubscription() {
        await this.manageNutritionSubscriptionLink.click();
    }
    async clickLinkOrderStatus() {
        await this.orderStatusLink.click();
    }

    async verifyBodiUrl() {
        console.log("page.url >>>> " +(this.page.url()));
        await expect.soft(this.page).toHaveURL(/.*faq?\.bodi.*/);
    }

    async fillSearchInput(text: string) {
        await this.searchInput.fill(text);
    }
    async getAllLinks() {
        const linksRef = await this.page.locator('a').evaluateAll(evalHref => evalHref.map(eh => eh.getAttribute('href')));
        console.log("Links hrefs are >>> " + linksRef.length);
        for (let i = 0; i < linksRef.length; i++) {
            console.log(i + " > Links hrefs are >>> " + linksRef[i]);
        }
    }

    async clickGolangLink() {
        await this.golangLink.click();
    }

    async clickVelesLink() {
        await this.valesLink.click();
    }

    async clickUxAppLink() {
        await this.uxAppLink.click();
    }

    async clickOpenSourceButton() {
        await this.openSourceButton.click();
    }

    async clickUxuiButton() {
        await this.uxUiButton.click();
    }

    async waitPagePromise(int = 1000) {
        await this.page.waitForTimeout(int);
    }
}
import { Locator, Page } from "@playwright/test";

export default class MenuPage{

    muAccount: Locator;

    constructor(protected page: Page) {
        this.muAccount = this.page.locator('[class="side-menu__action"]');
    }
    
    public async clickOnMyAccount(){
        await this.muAccount.first().click();
     }
}
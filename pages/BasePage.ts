import test, { expect, Locator, Page } from "@playwright/test";
export default class BasePage{
   
    constructor(protected page: Page){
    }

    public async GoToUrl(url:string){
        await this.page.goto(url);
    }

    public async validatePageUrl(url: string) {
            await expect(this.page).toHaveURL(url)
    }

    public async validateElementText(element: Locator, expectedText: string) {
            await expect(element).toContainText(expectedText);

    }
    
}

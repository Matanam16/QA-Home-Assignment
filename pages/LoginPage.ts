import { expect, Locator, Page } from "@playwright/test"

export default class LoginPage{
    
    emailFiled: Locator; 
    passwordfFiled: Locator;
    loginbtn: Locator;

    constructor(protected page: Page) {
        this.emailFiled = this.page.locator('[name="email"]');
        this.passwordfFiled = this.page.locator('[name="password"]');
        this.loginbtn = this.page.locator('[class="button__content"]');
    }

    public async loginToTheSystem(email: string, password: string, text: string){
        await this.emailFiled.fill(email);
        await this.passwordfFiled.fill(password);
        await this.loginbtn.getByText(text).click();
      }

      public async validationLoginToTheSystem(email: string, password: string){
        await expect (this.emailFiled).toContainText(email);
        await expect(this.passwordfFiled).toContainText(password);
      }
    }
  
import { expect, Locator, Page } from "@playwright/test"
import { execPath } from "process";
export default class HomePage{

    menutBtn: Locator;
    logimBtn: Locator;
    coinBalance: Locator;
    switcherBtn: Locator;


    constructor(protected page: Page) {
        this.menutBtn = this.page.locator('[class="_hamburger_7jhnn_110"]');
        this.logimBtn = this.page.locator('[class="animation-popup _blackButton_ji5vn_2 _withCrown_ji5vn_51"]');
        this.coinBalance = this.page.locator('[class="balance-panel-balance"]');
        this.switcherBtn = this.page.locator('[class="game-type-switcher"]');
    }


    public async clickOnLoginBtn(){
        await this.logimBtn.click();
     }

      public async openMenu(){
         await this.menutBtn.click();
      }

      public async getCoinsBalance(balance: string){
        await expect(this.coinBalance).toHaveText(balance);
        console.log(balance);
      }

      public async switchCoins(){
        await this.switcherBtn.click();
      }
}
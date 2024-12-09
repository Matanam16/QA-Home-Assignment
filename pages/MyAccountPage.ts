import { expect, Locator, Page } from "@playwright/test";
import { text } from "stream/consumers";

export default class MyAcoountPage{
    myProfile: Locator;
    editBtn: Locator;
    userNameFiled: Locator;
    nickName: Locator;
    applyBtn: Locator;
    closeBtn: Locator;
    closeMenu: Locator;
   

    constructor(protected page: Page) {
        this.myProfile = this.page.locator('[class="button__content"]')
        this.editBtn = this.page.locator('[class="_pen_a31cg_31"]');
        this.userNameFiled = this.page.locator('[class="_field_nil5y_29"]');
        this.nickName = this.page.locator('[class="_nicknameText_17bnj_10"]');
        this.applyBtn = this.page.locator('[class="button__content"]');
        this.closeBtn = this.page.locator('[class="close-btn"]');
        this.closeMenu = this.page.locator('[class="_overlay_1v2z7_1 dialog-overlay full-page-dialog__overlay "]');
    

    }

    public async openMyProfile(text: string){
      await this.myProfile.getByText(text).click();
    }

    public async clickOnEdit(){
      await this.editBtn.click();
    }

    public async selectNickname(nickName: string){
        await this.userNameFiled.fill(nickName);
      }

      public async selectRandomAvatr(){
        const elementsLocator = this.page.locator(`.${'[class="_avatarImage_nil5y_88"]'}`);
        const count = await elementsLocator.count();
        const randomIndex = Math.floor(Math.random() * count);
        const randomElement = elementsLocator.nth(randomIndex);
        await randomElement.click();

      }


      public async validateThatTheNiicknameChanged(text: string, nickname:string){
        await this.openMyProfile(text)
        await expect (this.nickName).toHaveText(nickname);
      }
      
      public async clickApply(text: string){
        await this.applyBtn.getByText(text).click();
      }

      public async closeMyProfile(){
        await this.closeBtn.nth(0).click();
      }

      public async clickToCloseMenu(){
        await this.closeMenu.click();
      }
}
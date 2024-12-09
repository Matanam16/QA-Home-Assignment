
import { expect, Locator, Page } from "@playwright/test";
import { text } from "stream/consumers";

export default class MyAcoountPage{
    myProfile: Locator;
    editBtn: Locator;
    userNameFiled: Locator;
    nickNameFiled: Locator;
    applyBtn: Locator;
    closeBtn: Locator;
    closeMenu: Locator;
   

    constructor(protected page: Page) {
        this.myProfile = this.page.locator('[class="button__content"]')
        this.editBtn = this.page.locator('[class="_pen_a31cg_31"]');
        this.nickNameFiled = this.page.locator('[class="_nicknameText_17bnj_10"]');
        this.userNameFiled = this.page.locator('[class="_field_nil5y_29"]');
        this.applyBtn = this.page.locator('[class="button__content"]');
        this.closeBtn = this.page.locator('[class="dialog__header-btn"]');
        this.closeMenu = this.page.locator('[class="_overlay_1v2z7_1 dialog-overlay full-page-dialog__overlay "]');
    

    }

    public async openMyProfile(text: string){
      await this.myProfile.getByText(text).click();
    }

    public async clickOnEdit(){
      await this.editBtn.first().click();
    }

    public async getNickname(nickName: string){
        await this.nickNameFiled.textContent();
        console.log(nickName);
      }

      public async fillRandomNickname(length){
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let result = "";
          for (let i = 0; i < 5; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
            console.log(result);
          }
          await this.userNameFiled.fill(result);
          
         
      }

      public async selectRandomAvatr(){
        const elementsLocator = this.page.locator(`.${'[class="_avatarImage_nil5y_88"]'}`);
        const count = await elementsLocator.count();
        const randomIndex = Math.floor(Math.random() * count);
        const randomElement = elementsLocator.nth(randomIndex);
        await randomElement.click();

      }

      public async validateThatTheNiicknameChanged(text: string, newNickname: string){
        await this.myProfile.getByText(text).click();
        const savedRandomString = this.fillRandomNickname(5);
        const nickNameFiled = document.getElementById(newNickname);
          if (nickNameFiled) {
             await nickNameFiled.textContent ; savedRandomString;
        }
        const displayedString = nickNameFiled?.textContent; 
          await expect (displayedString === await savedRandomString);
                }
      
      public async clickApply(text: string){
        await this.applyBtn.getByText(text).click();
      }

      public async closeMyProfile(){
        await this.closeBtn.first().click();
      }

      public async closeMyAccount(){
        await this.closeBtn.last().click();
      }

      public async clickToCloseMenu(){
        await this.closeMenu.click();
      }
}

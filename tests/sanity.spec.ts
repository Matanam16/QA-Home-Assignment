import { test, expect } from '@playwright/test';
import BasePage from '../pages/BasePage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/loginPage';
import MenuPage from '../pages/MenuPage';
import MyAcoountPage from '../pages/MyAccountPage';

test.describe("Sanity Test", async () => {
  let basePage: BasePage;
  let homePage: HomePage;
  let loginPage: LoginPage;
  let menuPage: MenuPage;
  let myAcoountPage: MyAcoountPage;
  const url = 'https://dev.crowncoinscasino.com/';
  const email = 'watchdogstest02+11@sunfltd.com';
  const password = '123456';
  const login = 'Log in';
  const myProfile = 'MY PROFILE';
  const nickName = '';
  const apply = 'Apply';
  const balance = ['318,992,450' , '26,922.20']

  test.beforeEach(async ({page}) => {
     basePage = new BasePage(page);
     loginPage = new LoginPage(page);
     homePage = new HomePage(page);
     menuPage = new MenuPage(page);
     myAcoountPage = new MyAcoountPage(page);
})

  test.afterEach(async ({context}) => {
     await context.clearCookies();
});

    test('test', async ({ page }) => {

    await test.step("Navigate to System And Login", async () => {
      await basePage.GoToUrl(url);
      await homePage.clickOnLoginBtn();
      await loginPage.loginToTheSystem(email , password);
    });

    await test.step("Go To The Menu, Change The Username And The Avatar", async () => {
      await homePage.openMenu();
      await menuPage.clickOnMyAccount();
      await myAcoountPage.openMyProfile(myProfile);
      await myAcoountPage.getNickname(nickName);
      await myAcoountPage.clickOnEdit();
      await myAcoountPage.fillRandomNickname(nickName);
      await myAcoountPage.selectRandomAvatr();
      await myAcoountPage.clickApply(apply);
      await myAcoountPage.validateThatTheNiicknameChanged(myProfile, nickName);
      await myAcoountPage.closeMyProfile();
      await myAcoountPage.clickToCloseMenu();
});

await test.step("Print the user's coin amount for both coin types", async () => {
  await homePage.getCoinsBalance(balance[0]);
  await homePage.switchCoins();
  await homePage.getCoinsBalance(balance[1]);
 
});

  });
}); 

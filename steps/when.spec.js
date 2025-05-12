const {When } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const {LoginPage} = require('../pages/login.page');
const {HomePage} = require('../pages/home.page');

When('I login with valid credentials', async function(){
    const loginPage = new LoginPage(this.page);
    await loginPage.loginApplication("admin@email.com", "admin@123");
})

When('I logout from the application', async function(){
    const homePage = new HomePage(this.page);
    await homePage.logoutFromApplication();
})
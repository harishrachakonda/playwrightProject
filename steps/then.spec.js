const {Then } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const {HomePage} = require('../pages/home.page');
const {LoginPage} = require('../pages/login.page');

Then('I should be redirected to the home page', async function() {
    const homePage = new HomePage(this.page);
    await homePage.verifyManageOption();
})

Then('I should be redirected to the login page', async function() {
    const loginPage = new LoginPage(this.page);
    await loginPage.verifySignIn();
})
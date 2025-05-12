const {Given } = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const {LoginPage} = require('../pages/login.page');

Given('I am on the login page', async function() {
    const loginPage = new LoginPage(this.page);
    await loginPage.launchApplication();
    await loginPage.verifySignIn();
})
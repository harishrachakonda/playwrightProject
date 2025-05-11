const {expect} = require('@playwright/test');
// This is the login page object model (POM) for the application
class LoginPage {
  constructor(page) {
    this.page=page
    this.username = '#email1';
    this.password = '#password1';
    this.loginButton = "//*[@class='submit-btn']";
    this.loginHeader = "//*[text()='Sign In']"
  }

  async loginApplication(username, password) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
    await this.page.waitForTimeout(2000);
  }

  async verifySignIn() {
    await expect(this.page.locator(this.loginHeader)).toBeVisible();
  }

}
module.exports= LoginPage
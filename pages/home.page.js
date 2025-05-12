const {expect} = require('@playwright/test');
// This is the home page object model (POM) for the application
class HomePage {
  constructor(page) {
    this.page=page;
    this.manageBtn = "//span[text()='Manage']";
    this.menuBtn = "//*[@alt='menu']";
    this.logoutBtn = "//*[text()='Sign out']";
    this.homePageTitle = "//*[text()='Learn Automation Courses']";
  }

  async verifyManageOption() {
    await expect(this.page.locator(this.manageBtn)).toBeVisible();
  }

  async logoutFromApplication() {
    await this.page.click(this.menuBtn);
    await this.page.click(this.logoutBtn);
  }
}
module.exports = {HomePage}

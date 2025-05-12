const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.goto("https://freelance-learn-automation.vercel.app/login");
  await this.page.getByPlaceholder("Enter Email").fill("admin@email.com");
  await this.page.getByPlaceholder("Enter Password").fill("admin@123");
  await this.page.getByRole("button", { name: "Sign in" }).click();
  await this.page.waitForTimeout(2000);
});

After(async function () {
  await this.page.close(); // Close the page after each scenario
  await this.browser.close(); // Close the browser after each scenario
});

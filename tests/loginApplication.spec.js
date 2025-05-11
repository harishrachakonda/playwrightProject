const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/login.page");
const HomePage = require("../pages/home.page");

test("Login to application using POM", async ({ page }) => {
  page.goto("https://freelance-learn-automation.vercel.app/login");
  const loginPage = new LoginPage(page); // Pass the page object here
  const homePage = new HomePage(page); // Pass the page object here
  await loginPage.loginApplication("admin@email.com", "admin@123");
  await homePage.verifyManageOption();
  await homePage.logoutFromApplication();
  await loginPage.verifySignIn();
});

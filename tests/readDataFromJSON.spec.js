const { test, expect } = require('@playwright/test');
const testData = require('../testData/testlogin.json'); // make sure the path is correct

test.describe("Data Driven Login Test", function(){
  for (const data of testData) {
    test.describe(`Login with user ${data.id}`, function(){
      test("Login with users from JSON", async ({ page }) => {
        await page.goto("https://freelance-learn-automation.vercel.app/login");

        await page.getByPlaceholder("Enter Email").fill(data.username);
        await page.getByPlaceholder("Enter Password1").fill(data.password);

        await page.waitForTimeout(3000)
      });
    });
  }
});
const {test,assert, expect} = require('@playwright/test')
const commonData = require('../testData/commonData')
const LoginPage = require("../pages/login.page")
const HomePage = require("../pages/home.page")
// Launch url and check expected login page is displayed 
// Login to orange hrm with username and password
// Validate if redirected to expected home page
// logout from application
// Check if expected login page is displayed 

test("Verify login and logout of orangeHRM website", async ({page}) =>{
    await page.goto("/");
    const title = await page.title()
    console.log(title);
    await page.locator("//*[@name='username']").fill("Admin")
    await page.locator("//*[@name='password']").fill("admin123")
    await page.locator("//*[@type='submit']").click()
    await expect(page).toHaveURL(/dashboard/)
    await expect(page).toHaveTitle("OrangeHRM")
    // Logout
    await page.locator("//*[contains(@class,'userdropdown-icon')]").click()
    await page.locator("//*[@role='menuitem' and text()='Logout']").click()
    await expect(page).toHaveTitle("OrangeHRM")




})

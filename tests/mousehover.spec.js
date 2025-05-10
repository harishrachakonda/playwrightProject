const {test,expect} = require("@playwright/test")

test("Verify Mouse Hover functionality",async ({page})=> {
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    // await page.getByText("Sign in").click()
    await page.getByRole("button",{name:"Sign in"}).click()

    await page.waitForSelector("//span[normalize-space()='Manage']")
    await page.locator("//span[normalize-space()='Manage']").hover();
    await page.locator("//a[normalize-space()='Manage Courses']").click()

    await page.waitForTimeout(5000)


})

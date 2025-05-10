const {test,expect} = require('@playwright/test')

// test.use({viewport:{width:1132,height:687}})

test("Verify error message", async ({page})=>{
    await page.goto("/")
    // await page.waitForTimeout(5000)
    await page.waitForSelector("//input[@placeholder='Username']")
    // await page.waitForTimeout(5000)
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("acascads")
    await page.locator("//button[normalize-space()='Login']").click()

    const errorMessage = await page.locator("//*[contains(@class,'alert-content-text')]").textContent()

    await expect(errorMessage.includes("Invalid")).toBeTruthy()

    await expect(errorMessage==="Invalid credentials").toBeTruthy()
})
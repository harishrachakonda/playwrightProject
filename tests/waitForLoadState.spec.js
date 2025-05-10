const {test,expect}=require("@playwright/test")

test("Wait for all api calls to complete",async ({page})=> {
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("//a[@class='subLink']").click()

    await page.waitForLoadState("networkidle")

    let count = await page.locator("//input[@type='checkbox']").count()

    expect(count).toBe(7)
})
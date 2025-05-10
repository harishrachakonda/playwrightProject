const {test,expect} = require("@playwright/test")

test("Handling multiple windows",async ({browser})=> {

    const context = await browser.newContext();

    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage]= await Promise.all([
        (await context).waitForEvent("page"),
        page.locator("(//a[contains(@href,'facebook')])[1]").click()
    ])

    await newPage.locator("(//input[@name='email'])[2]").fill("harish@gmail.com")

    await newPage.waitForTimeout(3000)

    await newPage.close()

    await page.locator("//*[@name='email1']").fill("harish1@gmail.com")
    await page.waitForTimeout(3000)

})
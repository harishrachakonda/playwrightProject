const {test,assert, expect}=require("@playwright/test")

test.skip("Handling Alerts", async ({page})=> {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)

    page.on('dialog',async (d) => {
        expect(d.type()).toContain("alert")
        expect(d.message()).toContain("I am a JS Alert")
        await d.accept()
    })

    await page.locator("//*[text()='Click for JS Alert']").click()

    await page.waitForTimeout(3000)
})

test.skip("Handling Confirms", async ({page})=> {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)

    page.on('dialog',async (d) => {
        expect(d.type()).toContain("confirm")
        expect(d.message()).toContain("I am a JS Confirm")
        await d.dismiss()
    })

    await page.locator("//*[text()='Click for JS Confirm']").click()

    await expect(await page.locator("//p[@id='result']")).toHaveText("You clicked: Cancel")

    await page.waitForTimeout(3000)
})

test("Handling JS Prompts", async ({page})=> {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.waitForTimeout(3000)
    const dialogData = "Harish"
    page.on('dialog',async (d) => {
        expect(d.type()).toContain("prompt")
        expect(d.message()).toContain("I am a JS prompt")
        await d.accept(dialogData)
    })

    await page.locator("//*[text()='Click for JS Prompt']").click()

    await expect(await page.locator("//p[@id='result']")).toHaveText(`You entered: ${dialogData}`)

    await page.waitForTimeout(3000)
})
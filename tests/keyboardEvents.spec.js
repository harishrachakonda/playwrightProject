const {test,expect}=require("@playwright/test")

test("Keyboard events",async ({page})=> {
    await page.goto("https://www.google.com")
    // await page.locator("textarea[name='q']").fill("Test");
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.type("Test Automation!")
    await page.keyboard.press("ArrowLeft")
    // from text "Test Automation!" remove "Automation"
    await page.keyboard.down("Shift")
    for(let i=0;i<10;i++){
        await page.locator("textarea[name='q']").focus()
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")

    await page.keyboard.press("Backspace")
    await page.waitForTimeout(2000)
    // await page.keyboard.press("Enter")
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Backspace")
    await page.waitForTimeout(2000)
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(2000)

})
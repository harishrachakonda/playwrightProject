const {test,expect} = require("@playwright/test")
const path = require("path")

test("Verify file upload",async ({page})=>{
    await page.goto("http://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("./uploads/aivshuman.jpg");
    await page.locator("//*[@value='Upload']").click()
    await page.waitForSelector("//*[@id='content']//h3")
    // const message = await page.locator("//*[@id='content']//h3").textContent()
    // await expect(message.includes("File Uploaded")).toBeTruthy()

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")

    await page.waitForTimeout(3000)


})
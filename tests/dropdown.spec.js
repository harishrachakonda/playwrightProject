const {test,expect} = require("@playwright/test")

test("Select values from dropdown",async ({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    // Single select
    // await page.locator("#state").selectOption({label:"Bihar"})
    // // await page.waitForTimeout(5000)
    
    // await page.locator("#state").selectOption({value:"Gujarat"})
    // // await page.waitForTimeout(2000)

    // await page.locator("#state").selectOption({index:3})
    // await page.waitForTimeout(2000)

    // Check if value is present in the dropdown
    // const values = await page.locator("#state").textContent()
    // console.log(values)

    // await expect(values.includes("Gujarat")).toBeTruthy()

    // Store all the dropdown values in an array, loop through the array and check if specific value is present
    await page.waitForSelector("#state")
    let state = await page.$("#state")
    let allElements = await state.$$("option")
    // console.log(allElements)
    let status=false
    for(let i=0;i<allElements.length;i++){
        let element = allElements[i]
        let value = await element.textContent()
        console.log("Value from dropdown: "+value)

        if(value.includes("Kerala")){
            status=true
            break;
        }

    }
    await expect(status).toBeTruthy()
    // Multi select dropdown
    await page.locator("#hobbies").selectOption(['Playing','Swimming'])

    await page.waitForTimeout(5000)

})
const {test,expect} = require("@playwright/test")

test("Verify auto suggestions",async ({page})=> {
    await page.goto("https://www.google.com")

    // Enter some text in google.com search and check for a specific text in the auto suggestions and select the suggestion

    await page.getByTitle("Search").fill("Playwright");
    await page.waitForSelector("//li[@role='presentation' and @data-attrid='AutocompletePrediction']")


    const elements = await page.$$("//li[@role='presentation' and @data-attrid='AutocompletePrediction']")

    for(let i=0;i<elements.length;i++){
        const suggestionVal = await elements[i].textContent()
        if(suggestionVal.includes("mcp")){
            await elements[i].click();
            break;
        }
    }
})
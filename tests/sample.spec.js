const {test,expect} = require('@playwright/test')

test.skip("My first test", async function({page}){
    expect(12).toBe(12)
})

test.skip("My second test", async function({page}){
    expect(12).toBe(12)
    
})

test.skip("My third test", async function({page}){
    expect(123).toBe(123)
    
})

test.skip("My fourth test", async function({page}){
    expect("Harish Rachakonda").toContain("Harish")
    
})
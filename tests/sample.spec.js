const {test,expect} = require('@playwright/test')

test("My first test", async function({page}){
    expect(12).toBe(12)
})

test("My second test", async function({page}){
    expect(12).toBe(12)
    
})

test("My third test", async function({page}){
    expect(123).toBe(123)
    
})

test("My fourth test", async function({page}){
    expect("Harish Rachakonda").toContain("Harish")
    
})
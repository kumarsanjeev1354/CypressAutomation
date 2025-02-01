//Given('I want to login to the appliaction',()=>{
//cy.visit("https://demo.guru99.com")
//})
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
Given('I want to login to the appliaction', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com')
})
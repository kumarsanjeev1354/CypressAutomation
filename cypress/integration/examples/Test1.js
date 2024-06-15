/// <reference types="Cypress" />
describe('My First Test Suite',function()
{
it('My First Test Case',function()
{
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)//Explicit Wait is added here
cy.get('.product:visible').should('have.length',4)// This will only show the list of elements that are visible on the website
// Parent Client Relations
cy.get('.products').find('.product').should('have.length',4)
//Adding the Item to add to cart
cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() // Here we are clicking on the Second Product   
})
})
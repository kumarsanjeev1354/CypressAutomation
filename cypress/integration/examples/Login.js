require('cypress-xpath')
describe('Launch browser', () => {
    it('to launch browser', () => {
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        //cy.get("[id='SubmitLogin']").click()
       // cy.get("[id='email']").type("neelam123")
        // cy.title().then((title)=>{
          //  cy.log("my title is ", title)
        // })
       cy.get("[name='country']").select('ANGOLA')
       cy.xpath
        
    })
    
})// creating class here and visiting a URL
 
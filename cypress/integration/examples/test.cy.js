describe('My First Test Suite',()=>
    {
    it('My First Test Case',()=>
    {
      
            cy.fixture('testdata.json').then((data)=> 
    {
             this.data=data
            cy.visit(this.data.URL)
            cy.get(this.data.Emailid).type(this.data.email)
            cy.get(this.data.PasswordID).type(this.data.Password)
            cy.get(this.data.SignInbtn).click()
            cy.log("User logged in Successfully")
            })
            
          
    })
    })
    
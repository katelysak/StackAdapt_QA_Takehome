const { FillingDemoForm } = require("../../support/page_objects/demo_navigationPage")


describe('Demo form submition', () => {

    it('Open demo form', () => {

        FillingDemoForm.NavigateToDemoPage()      

    })

    it('Fill form fields and submit', () => {

        cy.openDemoPage()
        FillingDemoForm.FirstNameField()
        FillingDemoForm.LastNameField()
        FillingDemoForm.BusinessEmail()
        FillingDemoForm.PhoneNumber()
        FillingDemoForm.CompanyName()
        FillingDemoForm.JobTitle()
        FillingDemoForm.CompanyType()
        FillingDemoForm.Country()
        FillingDemoForm.Province()
        FillingDemoForm.Submit()
        
    })

  })

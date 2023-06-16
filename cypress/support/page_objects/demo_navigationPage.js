

export class DemoForm{
    
    NavigateToDemoPage(){
        cy.openStackAdaptSite()
        cy.get('header nav div [href="/get-started"]').click()
    }

    FirstNameField(){
        cy.get('[id="first_name"]').type(Cypress.env("firstName"))
    }

    LastNameField(){
        cy.get('[id="last_name"]').type(Cypress.env("lastName"))
    }

    BusinessEmail(){
        cy.get('[id="email"]').type(Cypress.env("businessEmail"))
    }

    PhoneNumber(){
        cy.get('[id="phone"]').type(Cypress.env("phoneNumber"))
    }

    CompanyName(){
        cy.get('[id="company_name"]').type(Cypress.env("companyName"))
    }

    JobTitle(){
        cy.get('[id="job_title"]').type(Cypress.env("jobTitle"))
    }

    CompanyType(){
        cy.get('[id="company_type"]').select(Cypress.env("companyType"))
    }

    Country(){
        cy.get('[id="country"]').select(Cypress.env("country"))
    }

    Province(){
        cy.get('[id="province"]').select(Cypress.env("province"))
    }

    Submit(){
        cy.contains('Submit').click()
    }
}

export const FillingDemoForm = new DemoForm()
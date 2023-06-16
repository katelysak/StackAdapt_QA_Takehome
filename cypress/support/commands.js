
Cypress.Commands.add('openStackAdaptSite', () => {
    cy.visit('https://www.stackadapt.com/')
})

Cypress.Commands.add('openDemoPage', () => {
    cy.visit('https://www.stackadapt.com/get-started')
})

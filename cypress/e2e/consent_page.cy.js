describe('testing the consent page loads', () => {
    it('can load page', () => {
      cy.visit('http://localhost:3000/consent')
    })
  
    it("should have a title",()=>{
      cy.title().should('eq','Consent')
    })
  
    it("it should have a heading", () => {
      cy.get('#heading').contains('Storing your documents')
      cy.get('#heading').should('have.class', 'govuk-heading-xl')
    })
  })
  
describe('page contents', () => {
    it('has an explanation of what the portal is', () => {
        cy.get('#lead-para').should('have.class', 'govuk-body-l')
        cy.get('#lead-para').contains('In this section you can upload your identity documents.')
    })

    it('has a link to the security and GDPR policy', () => {
        cy.get('#security-gdpr-link').should('have.class', 'govuk-link')
        cy.get('#security-gdpr-link').contains('here')
    })

    it('has a link to required documents', () => {
        cy.get('#required-documents-link').should('have.class', 'govuk-link')
        cy.get('#required-documents-link').contains('here')
    })

    it('has a continue button', () => {
        cy.get('#btn-continue').should('have.class', 'govuk-button')
        cy.get('#btn-continue').contains('Continue to upload')
    })

    it('has a skip upload button', () => {
        cy.get('#btn-skip-upload').should('have.class', 'govuk-button')
        cy.get('#btn-skip-upload').contains('Skip upload & sign out')
    })

    it('checks consent checkboxes', () => {
        cy.get('#checkbox-consent-stored').should('have.class', 'govuk-checkboxes__input')
        cy.get('#checkbox-consent-used').should('have.class', 'govuk-checkboxes__input')
        cy.get('fieldset input').check(['consent-stored', 'consent-used'])
    })
})
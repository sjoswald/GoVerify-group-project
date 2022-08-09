describe('testing the consent page loads', () => {
    it('can load page', () => {
      cy.visit('http://localhost:3000/consent')
    })
  
    it("should have a title",()=>{
      cy.title().should('eq','Consent')
    })
  
    it("it should have a heading", () => {
      cy.get('#consent-heading').contains('Storing your documents')
      cy.get('#consent-heading').should('have.class', 'govuk-heading-xl')
    })
  })
  
describe('page contents', () => {
    it('has an explanation of what the portal is', () => {
        cy.get('#consent-lead-para').should('have.class', 'govuk-body-l')
        cy.get('#consent-lead-para').contains('In this section you can upload your identity documents.')
    })

    it('has a link to the security and GDPR policy', () => {
        cy.get('#consent-security-gdpr-link').should('have.class', 'govuk-link')
        cy.get('#consent-security-gdpr-link').contains('here')
    })

    it('has a link to required documents', () => {
        cy.get('#consent-required-documents-link').should('have.class', 'govuk-link')
        cy.get('#consent-required-documents-link').contains('here')
    })

    it('has a skip upload button', () => {
        cy.get('#consent-btn-skip-upload').should('have.class', 'govuk-button')
        cy.get('#consent-btn-skip-upload').contains('Skip upload & sign out')
    })

    it('checks consent checkboxes', () => {
        cy.get('#consent-checkbox-stored-and-used').should('have.class', 'govuk-checkboxes__input')
        cy.get('#consent-checkbox-stored-and-used').check()
    })

    it('should submit the form when the checkbox is checked', () => {
      cy.visit('http://localhost:3000/consent')
      cy.get('#consent-checkbox-stored-and-used').check()
      cy.get('#consent-form').submit()
      cy.location('pathname').should('eq', '/document-upload')
      cy.go('back')
    })

    it('should fail to submit the form when the checkbox is not checked', () => {
      cy.visit('http://localhost:3000/consent')
      cy.get('#consent-checkbox-stored-and-used').uncheck()
      cy.get('#submit-consent').click()
      cy.location('pathname').should('eq', '/consent')
      // cy.go('back')
    })

    it('has a sign out button', () => {
      cy.visit('http://localhost:3000/consent')
      cy.get('#consent-btn-skip-upload').should('have.class', 'govuk-button')
      cy.get('#consent-btn-skip-upload').contains('Skip upload & sign out')
  })

  it('sign out button leads to front page', () => {
    cy.visit('http://localhost:3000/consent')
    cy.get('#consent-btn-skip-upload').click()
    cy.location('pathname').should('eq', '/')
    cy.go('back')
  })

})
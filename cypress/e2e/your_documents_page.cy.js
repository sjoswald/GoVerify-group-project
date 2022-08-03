describe('testing the start page loads', () => {
    it('can load a webpage', () => {
      cy.visit('http://localhost:3000/your-documents')
    })
  
    it("should have a title",()=>{
      cy.title().should('eq','Your Documents')
    })
  
    it("it should have a heading", () => {
      cy.get('#hd-your-doc').contains('Your Documents')
      cy.get('#hd-your-doc').should('have.class', 'govuk-heading-xl')
    })
  })
  
  describe('page contents', () => {

    it('has an add document button', () => {
        cy.get('#btn-your-doc-add-doc').should('have.class', 'govuk-button')
        cy.get('#btn-your-doc-add-doc').contains('Add another document')
    })

    it("takes you to /document-type", () => {
        cy.get('#btn-your-doc-add-doc').click()
        cy.url().should('include', '/document-type')
      })

    it('can load a webpage', () => {
    cy.visit('http://localhost:3000/your-documents')
    })

    it('has an explanation of what the portal is', () => {
        cy.get('#para-your-doc-explanation').should('have.class', 'govuk-body-l')
        cy.get('#para-your-doc-explanation').contains('have been saved')
      })

    it('has an explanation of what the portal is', () => {
        cy.get('#para-your-doc-next-steps').should('have.class', 'govuk-body-l')
        cy.get('#para-your-doc-next-steps').contains('do next')
    })

    it('has a sign out button', () => {
        cy.get('#btn-your-doc-sign-out').should('have.class', 'govuk-button')
        cy.get('#btn-your-doc-sign-out').contains('Sign out')
    })

    it("takes you to /", () => {
        cy.get('#btn-your-doc-sign-out').click()
        cy.url().should('include', '/')
      })
    
    it('can load a webpage', () => {
    cy.visit('http://localhost:3000/your-documents')
    })

    it('has a council services button', () => {
        cy.get('#btn-your-doc-council-services').should('have.class', 'govuk-button')
        cy.get('#btn-your-doc-council-services').contains('Go to council services')
    })

    it("takes you to /homepage", () => {
        cy.get('#btn-your-doc-council-services').click()
        cy.url().should('include', '/homepage')
        })
})
describe('testing the start page loads', () => {
    it('can load a webpage', () => {
      cy.visit('http://localhost:3000/document-type')
    })
  
    it("should have a title",()=>{
      cy.title().should('eq','Document Type')
    })
  
    it("it should have a heading", () => {
      cy.get('#hd-doc-type').contains('Document Type')
      cy.get('#hd-doc-type').should('have.class', 'govuk-heading-xl')
    })
  })
  
  describe('page contents', () => {
    it('has a dropdown menu', () => {
        cy.get('#sort-doc-type').should('have.class', 'govuk-select')
        cy.get('#sort-doc-type').should('have.class', 'govuk-select')
        cy.get('#sort-doc-type').select('licence')
    })

      it('has a continue button', () => {
        cy.get('#btn-doc-type-continue').should('have.class', 'govuk-button')
        cy.get('#btn-doc-type-continue').contains('Continue to upload')
    })

      it('continue button leads to upload rules page', () => {
        cy.get('#btn-doc-type-continue').click()
        cy.location('pathname').should('eq', '/upload-rules')
      })
})
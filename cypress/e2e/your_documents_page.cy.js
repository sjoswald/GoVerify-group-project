describe('page contents', () => {
    it('can load page', () => {
        cy.visit('http://localhost:3000/your-documents')
      })

    it('has a save and proceed button', () => {
        cy.get('#yd-btn-services').should('have.class', 'govuk-button')
        cy.get('#yd-btn-services').contains('Go to council services')
    })

    it('continue to upload button leads to document upload page', () => {
      cy.get('#yd-btn-services').click()
      cy.location('pathname').should('eq', '/homepage')
      cy.go('back')
    })
})
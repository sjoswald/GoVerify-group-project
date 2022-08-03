describe('page contents', () => {
    it('can load page', () => {
        cy.visit('http://localhost:3000/review-upload')
      })

    it('has a save and proceed button', () => {
        cy.get('#review-upload-btn-proceed').should('have.class', 'govuk-button')
        cy.get('#review-upload-btn-proceed').contains('Save and proceed')
    })

    it('continue to upload button leads to document upload page', () => {
      cy.get('#review-upload-btn-proceed').click()
      cy.location('pathname').should('eq', '/your-documents')
      cy.go('back')
    })
})
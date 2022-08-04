describe('testing the upload page loads', () => {
    it('can load page', () => {
      cy.visit('http://localhost:3000/document-upload')
    })
  
    it("should have a title",()=>{
      cy.title().should('eq','Upload your document')
    })
  
    it("it should have a heading", () => {
      cy.get('#upload-rules-heading').contains('Upload your document')
      cy.get('#upload-rules-heading').should('have.class', 'govuk-heading-xl')
    })
  })
  
describe('page contents', () => {
    it('has an explanation of what the portal is', () => {
        cy.get('#upload-rules-lead-para').should('have.class', 'govuk-body-l')
        cy.get('#upload-rules-lead-para').contains('The photo you upload will need to match the following criteria:')
    })

    it('has a continue button', () => {
        cy.get('#upload-rules-btn-continue').should('have.class', 'govuk-button')
        cy.get('#upload-rules-btn-continue').contains('Save and proceed')
    })

    it('has a skip upload button', () => {
        cy.get('#upload-rules-btn-skip-upload').should('have.class', 'govuk-button')
        cy.get('#upload-rules-btn-skip-upload').contains('Skip upload & sign out')
    })

    it('tests for broken images', () => {
      cy.get('img').each(($img) => {
      cy.wrap($img).scrollIntoView().should('be.visible');
      expect($img[0].naturalWidth).to.be.greaterThan(0);
      expect($img[0].naturalHeight).to.be.greaterThan(0);
      });
    })

    it('opens next page when clicking save & proceed', () => {
      cy.get('#upload-rules-btn-continue').click()
      cy.location('pathname').should('eq', '/your-documents')
    })
})
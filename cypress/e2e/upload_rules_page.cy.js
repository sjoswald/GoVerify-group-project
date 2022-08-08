describe('testing the upload page loads', () => {
    it('can load page', () => {
      cy.visit('http://localhost:3000/upload-rules')
    })
  
    it("should have a title",()=>{
      cy.title().should('eq','Capturing your ID')
    })
  
    it("it should have a heading", () => {
      cy.get('#upload-rules-heading').contains('Capturing your ID document')
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
        cy.get('#upload-rules-btn-continue').contains('Continue to upload')
    })

    it('continue to upload button leads to document upload page', () => {
      cy.get('#upload-rules-btn-continue').click()
      cy.location('pathname').should('eq', '/document-upload')
      cy.go('back')
    })

    it('has a skip upload button', () => {
        cy.get('#upload-rules-btn-skip-upload').should('have.class', 'govuk-button')
        cy.get('#upload-rules-btn-skip-upload').contains('Skip upload & sign out')
    })

    it('has a skip upload and sign out button leading to the sign in page', () => {
      cy.get('#upload-rules-btn-skip-upload').click()
      cy.location('pathname').should('eq', '/')
      cy.go('back')
    })

    it('Tests for broken images', () => {
      cy.get('img').each(($img) => {
      cy.wrap($img).scrollIntoView().should('be.visible');
      expect($img[0].naturalWidth).to.be.greaterThan(0);
      expect($img[0].naturalHeight).to.be.greaterThan(0);
      });
      })
})
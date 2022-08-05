describe('testing the fcch loads', () => {
    it('can load a webpage', () => {
      cy.visit('http://localhost:3000/homepage')
    })
  
    it("should have a title",()=>{
      cy.title().should('eq','FCC Homepage')
    })
  
    it("it should have a heading", () => {
      cy.get('#hd-fcch').contains('Fictional City Council Services')
      cy.get('#hd-fcch').should('have.class', 'govuk-heading-xl')
    })
  })

  describe('page contents', () => {

    it('has a sign out button', () => {
        cy.get('#btn-fcch-sign-out').should('have.class', 'govuk-button')
        cy.get('#btn-fcch-sign-out').contains('Sign out')
        })

    it("takes you to /", () => {
        cy.get('#btn-fcch-sign-out').click()
        cy.location('pathname').should('eq', '/')
        cy.go('back')
        })

    it('has a My documents button', () => {
        cy.get('#btn-fcch-my-doc').should('have.class', 'govuk-button')
        cy.get('#btn-fcch-my-doc').contains('My documents')
    })

    it('My documents button leads to my documents page', () => {
        cy.get('#btn-fcch-my-doc').click()
        cy.location('pathname').should('eq', '/your-documents')
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
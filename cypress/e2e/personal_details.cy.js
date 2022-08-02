describe('testing the personal details page loads', () => {
    it('can load a webpage', () => {
      cy.visit('http://localhost:3000/personal-details')
    })
  
    it("should have a title",()=>{
      cy.title().should('eq','Personal Details')
    })
  
    it("should have a heading", () => {
      cy.get('#hd-personal-details').contains('Personal details')
      cy.get('#hd-personal-details').should('have.class', 'govuk-heading-xl')
    })

    it("should have a name field", () => {
        cy.get('#label-pd-name').contains('Full name')
        cy.get('#label-pd-name').should('have.class', 'govuk-label')
        cy.get('#input-pd-name').should('have.class', 'govuk-input')
        cy.get('input[name="full-name"]').type('Joshi').should('have.value','Joshi')
        })

    it("should have an email field", () => {
        cy.get('#label-pd-email').contains('Email address')
        cy.get('#label-pd-email').should('have.class', 'govuk-label')
        cy.get('#input-pd-email').should('have.class', 'govuk-input')
        cy.get('input[name="email"]').type('fake_email@mail.com').should('have.value','fake_email@mail.com')
        })

    it("should have a create password field", () => {
      // check password strength?
      cy.get('#label-pd-password').contains('Create password')
      cy.get('#label-pd-password').should('have.class', 'govuk-label')
      cy.get('#input-pd-password').should('have.class', 'govuk-input')
      cy.get('input[name="password"]').type('password123').should('have.value','password123')
      })

    it("should have a confirm password field", () => {
      cy.get('#label-pd-confirm-password').contains('Confirm password')
      cy.get('#label-pd-confirm-password').should('have.class', 'govuk-label')
      cy.get('#input-pd-confirm-password').should('have.class', 'govuk-input')
      cy.get('input[name="confirm-password"]').type('password123').should('have.value','password123')
      })

      // test - two passwords whould match - otherwise error message

    })



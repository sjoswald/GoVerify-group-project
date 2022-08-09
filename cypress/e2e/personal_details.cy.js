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

    it('has show password checkbox', () => {
      cy.get('#checkbox-pd-show-password').should('have.class', 'govuk-checkboxes__input')
    })

    it('shows the password when the checkbox is checked, and not otherwise', () => {
      cy.get('#input-pd-password').should('have.attr', 'type', 'password')
      cy.get('#checkbox-pd-show-password').check()
      cy.get('#input-pd-password').should('have.attr', 'type', 'text')
      cy.get('#checkbox-pd-show-password').uncheck()
      cy.get('#input-pd-password').should('have.attr', 'type', 'password')
    })


    it('has show password checkbox for confirm password field', () => {
      cy.get('#checkbox-pd-show-confirm-password').should('have.class', 'govuk-checkboxes__input')
    })

    it('shows the password when the checkbox is checked, and not otherwise', () => {
      cy.get('#input-pd-confirm-password').should('have.attr', 'type', 'password')
      cy.get('#checkbox-pd-show-confirm-password').check()
      cy.get('#input-pd-confirm-password').should('have.attr', 'type', 'text')
      cy.get('#checkbox-pd-show-confirm-password').uncheck()
      cy.get('#input-pd-confirm-password').should('have.attr', 'type', 'password')
    })

      // test - two passwords should match - otherwise error message

    it('has details about choosing a password', () => {
      cy.get('#details-pd-password-info').should('have.class', 'govuk-details')
      cy.get('#details-pd-password-summary').should('have.class', 'govuk-details__summary')
      cy.get('#details-pd-password-summary').contains('Choosing your password')
      cy.get('#details-pd-password-text').should('have.class', 'govuk-details__text')
      cy.get('#details-pd-password-text').contains('Your password needs to')
    })

    it('has a "Save and continue" button', () => {
      cy.get('#btn-pd-save').should('have.class', 'govuk-button')
      cy.get('#btn-pd-save').contains('Save and continue')
    })

    it('save and continue button raises error if fields are not all completed', () => {
      cy.get('#input-pd-confirm-password').clear()
      cy.get('#btn-pd-save').click()
      cy.location('pathname').should('eq', '/personal-details')
     });

     it('has an error if passwords do not match', () => {
      cy.get('#input-pd-confirm-password').type('password1')
      cy.get('#btn-pd-save').click()
      cy.location('pathname').should('eq', '/personal-details')
     });

    it('save and continue button takes you to the consent page when all fields are completed', () => {
      cy.get('input[name="confirm-password"]').type('23').should('have.value','password123')
      cy.get('#btn-pd-save').click()
      cy.location('pathname').should('eq', '/consent')
    })


    })



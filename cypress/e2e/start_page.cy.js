describe('testing the start page loads', () => {
  it('can load a webpage', () => {
    cy.visit('http://localhost:3000')
  })

  it("should have a title",()=>{
    cy.title().should('eq','Start Page')
  })

  it("it should have a heading", () => {
    cy.get('#hd-start-page').contains('Welcome to the GoVerify portal')
    cy.get('#hd-start-page').should('have.class', 'govuk-heading-xl')
  })
})

describe('page contents', () => {
  it('has an explanation of what the portal is', () => {
    cy.get('#start-page-para1').should('have.class', 'govuk-body-l')
    cy.get('#start-page-para1').contains('upload your documents')
  })

  it('has an explanation of what the buttons do', () => {
    cy.get('#start-page-para2').should('have.class', 'govuk-body-l')
    cy.get('#start-page-para2').contains('sign in')
  })

  it('has a log in button', () => {
    cy.get('#btn-signin').should('have.class', 'govuk-button')
    cy.get('#btn-signin').contains('Sign in')
  })

  it('has a create account button', () => {
    cy.get('#btn-create-acc').should('have.class', 'govuk-button')
    cy.get('#btn-create-acc').contains('Create an account')
  })
})

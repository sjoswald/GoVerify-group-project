describe('testing the your documents loads', () => {
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

    it('can load a webpage', () => {
      cy.visit('http://localhost:3000/your-documents')
    })

    it("takes you to /", () => {
        cy.get('#btn-your-doc-sign-out').click()
        cy.location('pathname').should('eq', '/')
        cy.go('back')
      })

     it('has a council services button', () => {
        cy.get('#btn-your-doc-council-services').should('have.class', 'govuk-button')
        cy.get('#btn-your-doc-council-services').contains('Go to council services')
    })

    it('council services button leads to council services page', () => {
      cy.get('#btn-your-doc-council-services').click()
      cy.location('pathname').should('eq', '/homepage')
      cy.go('back')
    })
  })

    describe('Test delete button alert and the text displaying', () => {
      it('Verify alert and its text content', () => {    
          cy.get('button').contains('Delete').click()
          cy.on('window:confirm', (str) => {
            expect(str).to.equal(`Warning! Please confirm you would like to delete your document, this action cannot be undone.`)
          })
      
        })
    })


describe('table tests', () => {
  it('has a table', () => {
    cy.visit('http://localhost:3000/your-documents')
    cy.get('table').contains('th', 'Upload date')
  })

  it('has a view document button', () => {
    cy.visit('http://localhost:3000/your-documents')
    cy.get('#tbl-your-doc-documents').contains('td', 'View')
    cy.get('#btn-your-doc-view1').should('have.class', 'govuk-button')
  })

  it('has a delete document button', () => {
    cy.visit('http://localhost:3000/your-documents')
    cy.get('#tbl-your-doc-documents').contains('td', 'Delete')
    cy.get('#btn-your-doc-delete1').should('have.class', 'govuk-button govuk-button--warning')
  })
})
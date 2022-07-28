describe('empty spec', () => {
  it('can load a webpage', () => {
    cy.visit('http://localhost:3000')
  })
  it("should have a title",()=>{
    cy.title().should('eq','Start Page')
  })
})

describe('Pool', () => {
  beforeEach(() => cy.visit('/pool'))

  it('import pool links to /import', () => {
    cy.get('#import-pool-link').click()
    cy.url().should('contain', '/find')
  })
})

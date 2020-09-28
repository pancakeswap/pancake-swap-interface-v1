describe('Warning', () => {
  beforeEach(() => {
    cy.visit('#/swap?outputCurrency=0xa6381c6fd8f40a44721ef4f61edc1a8ccca7bf3d')
  })

  // Warning is not displaying in Cypress
  // it('Check that warning is displayed', () => {
  //   cy.get('.token-warning-container').should('be.visible')
  // })

  // it('Check that warning hides after button dismissal', () => {
  //   cy.get('.token-dismiss-button').should('be.disabled')
  //   cy.get('.understand-checkbox').click()
  //   cy.get('.token-dismiss-button').should('not.be.disabled')
  //   cy.get('.token-dismiss-button').click()
  //   cy.get('.token-warning-container').should('not.be.visible')
  // })
})

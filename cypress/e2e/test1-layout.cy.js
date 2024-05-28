describe('Buttons Test', () => {
  it('Checks all buttons are visible and clickable', () => {
    cy.visit('http://localhost:3000')  // Adjust the URL to your local dev server

    // Get all button elements
    cy.get('button').should('exist').each(($btn) => {
      // Ensure each button is visible
      cy.wrap($btn).should('be.visible')

      // Ensure each button is clickable
      cy.wrap($btn).click().should('not.be.disabled')
      
      // Additional checks if necessary, e.g., text content
      cy.wrap($btn).invoke('text').should('not.be.empty')
    })
  })
})

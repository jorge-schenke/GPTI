describe('Navigation', () => {
  it('should navigate to the home page', () => {
    cy.visit('http://localhost:3001/')
    cy.get('h1').contains('Welcome to Ecomedi!')
  })

  it('should navigate to the result page', () => {
    // Start from the index page
    cy.visit('http://localhost:3001/')

    // Enter word to search
    cy.get('TextField').contains('Ejemplo input').type('Paracetamol')

    // Find a button containing "Buscar" and click it
    cy.get('Button').contains('Buscar').click()

    // The new url should include "/about"
    //cy.url().should('include', '/about')

    // The new page should contain an h1 with "About page"
    //cy.get('h1').contains('About Page')
  })
})
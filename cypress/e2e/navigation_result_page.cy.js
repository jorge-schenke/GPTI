describe('Navigation Result Page', () => {

  beforeEach(() => {
    //Give an alias to the request
    cy.intercept({
      method: 'GET',
      url: '/api/Paracetamol'
    }).as('apiResponse')
  })

  it('should navigate to the result page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    // Enter word to search
    cy.get('input').type('Paracetamol')
    // Find a button containing "Buscar" and click it
    cy.get('Button').contains('Buscar').click()
    // The page should contain an h1 with "Buscando los mejores precios"
    cy.get('h1[id="loading"]',{timeout: 300000}).contains('Buscando los mejores precios')
    // Wait for API response
    cy.wait('@apiResponse', { responseTimeout: 300000})
    // The page should contain an h1 with "Resultados"
    cy.get('h1[id="results"]').contains('Resultados')
    // The page should contain the search results
    cy.get('h4').contains('Paracetamol')
    // The page should show three results
    cy.get('div[class="container main-content"]').children().should('have.length', 3)
  })

  it('should navigate to the result page and show more results', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    // Enter word to search
    cy.get('input').type('Paracetamol')
    // Find a button containing "Buscar" and click it
    cy.get('Button').contains('Buscar').click()
    // The page should contain an h1 with "Buscando los mejores precios"
    cy.get('h1[id="loading"]',{timeout: 300000}).contains('Buscando los mejores precios')
    // Wait for API response
    cy.wait('@apiResponse', { responseTimeout: 300000})
    // The page should contain an h1 with "Resultados"
    cy.get('h1[id="results"]',{timeout: 300000}).contains('Resultados')
    // The page should contain the search results
    cy.get('h4').contains('Paracetamol')
    // The page should show three results
    cy.get('div[class="container main-content"]').children().should('have.length', 3)
    // Find a button containing "Mas Resultados" and click it
    cy.get('Button').contains('Mostrar más resultados').click()
    // The page should show six results
    cy.get('div[class="container main-content"]', {timeout: 15000}).children().should('have.length', 6)
  })

it('should navigate to home page after search', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    // Enter word to search
    cy.get('input').type('Paracetamol')
    // Find a button containing "Buscar" and click it
    cy.get('Button').contains('Buscar').click()
    // The page should contain an h1 with "Buscando los mejores precios"
    cy.get('h1[id="loading"]',{timeout: 300000}).contains('Buscando los mejores precios')
    // Wait for API response
    cy.wait('@apiResponse', { responseTimeout: 300000})
    // The page should contain an h1 with "Resultados"
    cy.get('h1[id="results"]',{timeout: 300000}).contains('Resultados')
    // Find a button containing "Buscar otro remedio" and click it
    cy.get('Button').contains('Buscar otro remedio').click()
    // The new page should contain an h1 with "¡Bienvenido a Ecomedi!"
    cy.get('h1[id="welcome"]', {timeout: 15000}).contains('¡Bienvenido a Ecomedi!')
    // The new url should be index page
    cy.url({timeout: 15000}).should('eq', 'http://localhost:3000/')
  })

  it('should navigate to about page after search', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    // Enter word to search
    cy.get('input').type('Paracetamol')
    // Find a button containing "Buscar" and click it
    cy.get('Button').contains('Buscar').click()
    // The page should contain an h1 with "Buscando los mejores precios"
    cy.get('h1[id="loading"]',{timeout: 300000}).contains('Buscando los mejores precios')
    // Wait for API response
    cy.wait('@apiResponse', { responseTimeout: 300000})
    // The page should contain an h1 with "Resultados"
    cy.get('h1[id="results"]').contains('Resultados')
    // The page should contain the search results
    cy.get('h4').contains('Paracetamol')
    // Click about in nav bar
    cy.get('a[href="/about"]').contains('About').click()
    // The new url should include "/about"
    cy.url({timeout: 15000}).should('include', '/about')
    // The new page should contain an h2 with "¿Quienes Somos?"
    cy.get('h2').contains('¿Quienes Somos?')
  })
})
describe('Navigation Home Page', () => {

  it('should navigate to about page from home', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    // Click about in nav bar
    cy.get('a[href="/about"]', {timeout: 30000}).contains('About').click()
    // The new url should include "/about"
    cy.url({timeout: 300000}).should('include', '/about')
    // The new page should contain an h2 with "¿Quienes Somos?"
    cy.get('h2').contains('¿Quienes Somos?')
  })

  it('should stay in home page with home button', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    // Click home in nav bar
    cy.get('a[href="/"]', {timeout: 15000}).contains('Home').click()
    // The url should be index page
    cy.url({timeout: 300000}).should('eq', 'http://localhost:3000/')
    // The page should contain an h1 with "'¡Bienvenido a Ecomedi!'"
    cy.get('h1[id="welcome"]').contains('¡Bienvenido a Ecomedi!')
  })

  it('should stay in home page with logo', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')
    // Click logo in nav bar
    cy.get('a[href="/"]', {timeout: 30000}).contains('Ecomedi ').click()
    // The url should be index page
    cy.url({timeout: 300000}).should('eq', 'http://localhost:3000/')
    // The page should contain an h1 with "'¡Bienvenido a Ecomedi!'"
    cy.get('h1[id="welcome"]').contains('¡Bienvenido a Ecomedi!')
  })
})

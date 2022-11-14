import Navbar from "../../components/Navbar";
/// Code get from link: https://github.com/cypress-io/cypress/discussions/22715
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { Provider } from 'mobx-react'

const createRouter = () => {
  return {
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    components: {},
    isFallback: false,
    basePath: '',
    events: { emit: cy.spy().as('emit'), off: cy.spy().as('off'), on: cy.spy().as('on') },
    push: cy.spy().as('push'),
    replace: cy.spy().as('replace'),
    reload: cy.spy().as('reload'),
    back: cy.spy().as('back'),
    prefetch: cy.stub().as('prefetch').resolves(),
    beforePopState: cy.spy().as('beforePopState'),
  }
}
///

describe('<Navbar>', () => {
  
  beforeEach(() => {
    const router = createRouter()
    cy.mount(
        <RouterContext.Provider value={router}>
          <Navbar />
        </RouterContext.Provider>
    )
  })

  it('should have a link with page name', () => {
    cy.get('[data-cy=logo]').should('contain', 'Ecomedi')
  })

  it('should have a logo', () => {
    cy.get('[data-cy=image]').should('have.attr', 'src',  '/_next/image?url=%2Fpill.png&w=64&q=75')
    cy.get('[data-cy=image]').should('have.attr', 'alt', 'ecomedi_logo')
  })

  it('should have a home button in home', () => {
    cy.get('[data-cy=home-active]').should('have.text', 'Home')
  })

  it('should have an about us button in home', () => {
    cy.get('[data-cy=about]').should('have.text', 'AboutUs')
  })

  it('should have a home button in about', () => {
    const router = createRouter()
    router.asPath = '/about'
    cy.mount(
        <RouterContext.Provider value={router}>
          <Navbar />
        </RouterContext.Provider>
    )
    cy.get('[data-cy=home]').should('have.text', 'Home')
  })

  it('should have an about us button in about', () => {
    const router = createRouter()
    router.asPath = '/about'
    cy.mount(
        <RouterContext.Provider value={router}>
          <Navbar />
        </RouterContext.Provider>
    )
    cy.get('[data-cy=about-active]').should('have.text', 'AboutUs')
  })
})

import { LoadingScreen }  from "../../components/LoadingScreen";

describe('<LoadingScreen>', () => {
  beforeEach(() => {
    cy.mount(<LoadingScreen />)
  })

  it('should have a list with five dots', () => {
    cy.get('[data-cy=loading]').children().should(($lis) => {
      expect($lis).to.have.length(5)
      expect($lis.eq(0)).to.have.attr('data-cy', 'dot')
      expect($lis.eq(1)).to.have.attr('data-cy', 'dot')
      expect($lis.eq(2)).to.have.attr('data-cy', 'dot')
      expect($lis.eq(3)).to.have.attr('data-cy', 'dot')
      expect($lis.eq(4)).to.have.attr('data-cy', 'dot')
    })
  })

})
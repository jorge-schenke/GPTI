import ProductRow from "../../components/ProductRow";


describe('<ProductRow>', () => {

  beforeEach(() => {
    const remedio = {"title":"Dolsom - Paracetamol 100 Mg/Ml Solución Gotas Orales 30 Ml ","price":1800,"link":"https://www.drsimi.cl/dolsom-paracetamol-100-mg-ml-solucion-gotas-orales-30-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/156575-1000-1000?v=1754238930&width=1000&height=1000&aspect=true","source":"Dr Simi"}
    cy.mount(<ProductRow 
              key={0}
              title={remedio?.title}
              source={remedio?.source}
              price={remedio?.price}
              image={remedio?.image}
              link={remedio?.link}/>)

    })

  it('should have an image with correct picture', () => {
    cy.get('[data-cy=image]').should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Ffarmaciasdeldrsimicl.vtexassets.com%2Farquivos%2Fids%2F156575-1000-1000%3Fv%3D1754238930%26width%3D1000%26height%3D1000%26aspect%3Dtrue&w=256&q=75')
  })

  it('should have an image with correct alt', () => {
    const remedio = {"title":"Dolsom - Paracetamol 100 Mg/Ml Solución Gotas Orales 30 Ml ","price":1800,"link":"https://www.drsimi.cl/dolsom-paracetamol-100-mg-ml-solucion-gotas-orales-30-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/156575-1000-1000?v=1754238930&width=1000&height=1000&aspect=true","source":"Dr Simi"}
    cy.get('[data-cy=image]').should('have.attr', 'alt', remedio.title)
  })

  it('should have a correct title', () => {
    const remedio = {"title":"Dolsom - Paracetamol 100 Mg/Ml Solución Gotas Orales 30 Ml ","price":1800,"link":"https://www.drsimi.cl/dolsom-paracetamol-100-mg-ml-solucion-gotas-orales-30-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/156575-1000-1000?v=1754238930&width=1000&height=1000&aspect=true","source":"Dr Simi"}
    cy.get('[data-cy=title]').get('h4').should('have.text',remedio.title)
  })

  it('should have a correct price', () => {
    const remedio = {"title":"Dolsom - Paracetamol 100 Mg/Ml Solución Gotas Orales 30 Ml ","price":1800,"link":"https://www.drsimi.cl/dolsom-paracetamol-100-mg-ml-solucion-gotas-orales-30-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/156575-1000-1000?v=1754238930&width=1000&height=1000&aspect=true","source":"Dr Simi"}
    cy.get('[data-cy=price]').should('contain',remedio.price)
  })

  it('should have a button to page', () => {
    cy.get('[data-cy=button]').should('have.text', 'Revisar remedio')
  })
})
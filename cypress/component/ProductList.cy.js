import ProductList from "../../components/ProductList";

describe('<ProductList>', () => {

  it('should have an empty list', () => {
    const remedios = [{"title":"Dolsom - Paracetamol 100 Mg/Ml Solución Gotas Orales 30 Ml ","price":1800,"link":"https://www.drsimi.cl/dolsom-paracetamol-100-mg-ml-solucion-gotas-orales-30-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/156575-1000-1000?v=1754238930&width=1000&height=1000&aspect=true","source":"Dr Simi"},{"title":"Algiafin - Paracetamol 120 Mg/5Ml - Jarabe 60 Ml ","price":3000,"link":"https://www.drsimi.cl/algiafin-paracetamol-120-mg-5ml-jarabe-60-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/157034-1000-1000?v=1753790489&width=1000&height=1000&aspect=true","source":"Dr Simi"},{"title":"Tapsin SC - Paracetamol 1 Gr Polvo Para Solución Oral Efervescente ","price":7000,"link":"https://www.drsimi.cl/tapsin-sc-paracetamol-1-gr-polvo-para-solucion-oral-efervescente/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/157210-1000-1000?v=1754414804&width=1000&height=1000&aspect=true","source":"Dr Simi"}]
    cy.mount(<ProductList remedios={remedios.slice(0, 0)} />)
    cy.get('[data-cy=product-list]').children().should('have.length', 0)
  })

  it('should have a list with two products', () => {
    const remedios = [{"title":"Dolsom - Paracetamol 100 Mg/Ml Solución Gotas Orales 30 Ml ","price":1800,"link":"https://www.drsimi.cl/dolsom-paracetamol-100-mg-ml-solucion-gotas-orales-30-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/156575-1000-1000?v=1754238930&width=1000&height=1000&aspect=true","source":"Dr Simi"},{"title":"Algiafin - Paracetamol 120 Mg/5Ml - Jarabe 60 Ml ","price":3000,"link":"https://www.drsimi.cl/algiafin-paracetamol-120-mg-5ml-jarabe-60-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/157034-1000-1000?v=1753790489&width=1000&height=1000&aspect=true","source":"Dr Simi"},{"title":"Tapsin SC - Paracetamol 1 Gr Polvo Para Solución Oral Efervescente ","price":7000,"link":"https://www.drsimi.cl/tapsin-sc-paracetamol-1-gr-polvo-para-solucion-oral-efervescente/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/157210-1000-1000?v=1754414804&width=1000&height=1000&aspect=true","source":"Dr Simi"}]
    cy.mount(<ProductList remedios={remedios.slice(0, 2)} />)
    cy.get('[data-cy=product-list]').children().should(($lis) => {
      expect($lis).to.have.length(2)
      expect($lis.eq(0)).to.contain(remedios[0].title)
      expect($lis.eq(1)).to.contain(remedios[1].title)
    })
  })

  it('should have a list with three products', () => {
    const remedios = [{"title":"Dolsom - Paracetamol 100 Mg/Ml Solución Gotas Orales 30 Ml ","price":1800,"link":"https://www.drsimi.cl/dolsom-paracetamol-100-mg-ml-solucion-gotas-orales-30-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/156575-1000-1000?v=1754238930&width=1000&height=1000&aspect=true","source":"Dr Simi"},{"title":"Algiafin - Paracetamol 120 Mg/5Ml - Jarabe 60 Ml ","price":3000,"link":"https://www.drsimi.cl/algiafin-paracetamol-120-mg-5ml-jarabe-60-ml/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/157034-1000-1000?v=1753790489&width=1000&height=1000&aspect=true","source":"Dr Simi"},{"title":"Tapsin SC - Paracetamol 1 Gr Polvo Para Solución Oral Efervescente ","price":7000,"link":"https://www.drsimi.cl/tapsin-sc-paracetamol-1-gr-polvo-para-solucion-oral-efervescente/p","image":"https://farmaciasdeldrsimicl.vtexassets.com/arquivos/ids/157210-1000-1000?v=1754414804&width=1000&height=1000&aspect=true","source":"Dr Simi"}]
    cy.mount(<ProductList remedios={remedios.slice(0, 3)} />)
    cy.get('[data-cy=product-list]').children().should(($lis) => {
      expect($lis).to.have.length(3)
      expect($lis.eq(0)).to.contain(remedios[0].title)
      expect($lis.eq(1)).to.contain(remedios[1].title)
      expect($lis.eq(2)).to.contain(remedios[2].title)
    })
  })
})

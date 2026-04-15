class AberturaDeContaPage{

   
  selecionaPorEmpresaEStatus(empresa, status) {
  cy.get('tbody tr').each(($row) => {
    const textoLinha = $row.text()

    if (
      textoLinha.includes(empresa) &&
      textoLinha.includes(status)
    ) {
      cy.wrap($row).click()
      return false // interrompe o loop
    }
  })
 }
     
}


export default new AberturaDeContaPage()


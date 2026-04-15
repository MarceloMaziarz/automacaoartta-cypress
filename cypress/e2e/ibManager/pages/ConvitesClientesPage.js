import BasePage from '../../../core/BasePage'
import formatarCNPJ from '../utils/formatarCNPJ'

class ConvitesClientesPage{

    clicaBotaoNovoConvite(){


       BasePage.clicaBotaoPorLink('/invites/new').click()
       cy.contains('Convidar Cliente', { timeout: 10000 }).should('be.visible').click()



    }

    clicaBotaoDetalhes(nomeEmpresa,cnpjSemMascara){
       
     const cnpjFormatado = formatarCNPJ(cnpjSemMascara)

  cy.get('table tbody tr', { timeout: 10000 })
    .should('have.length.greaterThan', 0)

  cy.contains('td', new RegExp(nomeEmpresa, 'i'), { timeout: 10000 })
    .parents('tr')
    .within(() => {
      cy.contains('td', cnpjFormatado).should('exist')
      cy.contains('button', 'Detalhes').click()
    })
  }
}




export default new ConvitesClientesPage

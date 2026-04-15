/// <reference types="cypress"/>

import LoginIBClientPage from "../../../auth/LoginIBClientPage"
import ExtratoPage from "../Pages/ExtratoPage"

 
//                              Loga no IB Cliente
describe('Logar no IB Cliente', () => {
   beforeEach(() => {
    cy.loginIBClient()
    
  })

    it('Pagamento com PIX', () => {
//                       Busca Cadastro do Cliente

        ExtratoPage.clicarSelecionarConta()
        ExtratoPage.setConta('5939660025')
        ExtratoPage.clicarBotaoSelecionarConta()
        ExtratoPage.clicarBotaoConfirmar()
        ExtratoPage.clicarBotaoPix()
        ExtratoPage.clicarBotaoPagarPix()
        cy.wait(2000)
        ExtratoPage.selecionaFavorecido('QA Testes - 08.923.120/0001-72')
        cy.wait(3000)
        ExtratoPage.clicarBotaoContinuar()
        
        
        
    })

              

})
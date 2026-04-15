/// <reference types="cypress"/>

import LoginIBClientPage from "../../../auth/LoginIBClientPage"
import ReceberPixPage from "../Pages/ReceberPixPage"

 
//                              Loga no IB Cliente
describe('Logar no IB Cliente', () => {
   beforeEach(() => {
    cy.loginIBClient()
    
  })

    it('Receber PIX', () => {
//                       Busca Cadastro do Cliente

        ReceberPixPage.clicarSelecionarConta
        ReceberPixPage.setConta('5939660025')
        ReceberPixPage.clicarBotaoSelecionarConta()
        ReceberPixPage.clicarBotaoConfirmar()
        ReceberPixPage.clicarBotaoPix()
        
        
        
    })

              

})
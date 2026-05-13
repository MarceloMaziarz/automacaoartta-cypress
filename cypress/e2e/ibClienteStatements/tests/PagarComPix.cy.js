/// <reference types="cypress"/>

import LoginIBClientPage from "../../../auth/LoginIBClientPage"
import ExtratoPage from "../Pages/ExtratoPage"
import MenuPage from "../Pages/MenuPage";
import SelecionarContaPage from "../Pages/SelecionarContaPage";
import PagarComPixPage from "../Pages/PagarComPixPage";


//                              Loga no IB Cliente
describe('Logar no IB Cliente', () => {
  beforeEach(() => {
    cy.loginIBClient()

  })

  it('Pagamento com PIX', () => {

    cy.intercept('**', (req) => {
  console.log('REQ:', req.method, req.url)
})


    //                                        Seleciona conta   
    SelecionarContaPage.clicaTrocarConta()
    SelecionarContaPage.selecionaConta('593966002-5')
    SelecionarContaPage.clicaBotaoConfirmar()

    //                                        Seleciona Menu

    cy.intercept('GET', '**/bff/favoreds/pix/all/**').as('favoreds')

    cy.intercept('GET', '**/bff/accounts/balance/**', (req) => {
  req.continue((res) => {
    console.log('BALANCE RESPONSE:', res.body)
  })
}).as('balance')

    MenuPage.acessarTelaPix()

    


    //                                        efetua o pagamento


    PagarComPixPage.clicaBotaoPagarComPix()
    cy.wait('@favoreds')
    PagarComPixPage.selecionaComboFavorecido('Ronaldo - 080.420.099-84 - Conta: 501088 - Banco: 001 - BANCO DO BRASIL S/A')
    PagarComPixPage.clicaBotaoContinuar()
    







    //                       Busca Cadastro do Cliente

    /*
    
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
            
    */

  })



})
/// <reference types="cypress"/>

import MenuPage from "../Pages/MenuPage";
import PagamentoBoletoPage from "../Pages/PagamentoBoletoPage";
import AutorizacoesPage from "../Pages/AutorizacoesPage";
import SelecionarContaPage from "../Pages/SelecionarContaPage";
import LimitesPage from "../Pages/LimitesPage";
import LimitesTedPage from "../Pages/LimitesTedPage";

//                             Loga no IB cliente
describe('Logar no IB Cliente', () => {
  beforeEach(() => {
    cy.loginIBClient()

  })

  //                                       Aprovar Pagamento de Boletos
it('Efetuar Alteração de limite TED', () => {

 //                                        Seleciona conta   
    SelecionarContaPage.clicaTrocarConta()
    SelecionarContaPage.selecionaConta('593966002-5')
    SelecionarContaPage.clicaBotaoConfirmar()

 //                                         Alterar limite TED
 
 
    MenuPage.acessarTelaLimites()
    LimitesPage.clicaSubMenuTED()
    LimitesTedPage.insereLimite('2.000,00')
    LimitesTedPage.clicaBotaoSalvar()
    LimitesTedPage.clicaBotaoConfirmar()
    LimitesTedPage.obterMensagemSucessoLimiteTED()

       });

})
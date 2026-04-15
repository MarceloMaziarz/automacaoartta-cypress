/// <reference types="cypress"/>


import DetalhesDaSolicitacaoPage from '../pages/DetalhesDaSolicitacaoPage';
import AberturaDeContaPage from '../pages/AberturaDeContaPage';
import LoginIBAdminPage from '../../../auth/LoginIBAdminPage';


//                             Loga no IB Admin


describe('Rejeição de conta', () => {
   beforeEach(() => {
    cy.loginIBAdmin()
    
  })
    it('Rejeita cadastro no IB admin', () => {

//                       Busca Cadastro do Cliente
 
    
       AberturaDeContaPage.selecionaPorEmpresaEStatus('Empresa Teste QA','Em análise')
       DetalhesDaSolicitacaoPage.clicaBotaoRejeitar()
       DetalhesDaSolicitacaoPage.confirmaBotaoRejeitar()
       DetalhesDaSolicitacaoPage.obterMensagemDeSucessoNaRejeicao() 

    })


})

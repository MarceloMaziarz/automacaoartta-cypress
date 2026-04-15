/// <reference types="cypress"/>

import LoginIBAdminPage from '../../../auth/LoginIBAdminPage';
import DetalhesDaSolicitacaoPage from '../pages/DetalhesDaSolicitacaoPage';
import AberturaDeContaPage from '../pages/AberturaDeContaPage';





    //                             Loga no IB Admin
describe('Rejeição de conta', () => {
   beforeEach(() => {
    cy.loginIBAdmin()
    
  })
 
  it('Rejeita cadastro no IB admin', () => {
//                       Busca Cadastro do Cliente
 
    
       AberturaDeContaPage.selecionaPorEmpresaEStatus('Empresa Teste QA','Em análise')
       DetalhesDaSolicitacaoPage.clicaBotaoAprovar()
       DetalhesDaSolicitacaoPage.confirmaBotaoAprovar()
       DetalhesDaSolicitacaoPage.obterMensagemDeSucesso() 

    });

 })


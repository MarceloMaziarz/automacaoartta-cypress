import MenuPage from "../Pages/MenuPage";
import PagamentoBoletoPage from "../Pages/PagamentoBoletoPage";
import AutorizacoesPage from "../Pages/AutorizacoesPage";
import SelecionarContaPage from "../Pages/SelecionarContaPage";


//                             Loga no IB cliente
describe('Logar no IB Cliente', () => {
  beforeEach(() => {
    cy.loginIBClient()

  })

  //                                       Aprovar Pagamento de Boletos
it('Aprovar Pagamento de Boletos', () => {

 //                                        Seleciona conta   
    SelecionarContaPage.clicaTrocarConta()
    SelecionarContaPage.selecionaConta('593966002-5')
    SelecionarContaPage.clicaBotaoConfirmar()

//                                         Efetua o pagamento

    MenuPage.acessarTelaPagamentoDeBoleto()
    PagamentoBoletoPage.insereCodPagamento('23793381286008301352856000063307789840000150000')
    PagamentoBoletoPage.clicaBotaoContinuar()
    PagamentoBoletoPage.validaMensagemHorarioPagamento()
    PagamentoBoletoPage.clicaBotaoConfirmar()
    AutorizacoesPage.clicaBotaoAprovar()
    AutorizacoesPage.ClicaBotaoConfirmaAutorizacao()
    AutorizacoesPage.obterMensagemSucessoNaAprovacao()
    AutorizacoesPage.obterMensagemSucessoNaTransacao()
    


    });

})


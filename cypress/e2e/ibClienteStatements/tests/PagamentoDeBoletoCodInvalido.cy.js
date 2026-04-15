import MenuPage from "../Pages/MenuPage";
import PagamentoBoletoPage from "../Pages/PagamentoBoletoPage";
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

//                                         Efetua o pagamento Cod Inválido

    MenuPage.acessarTelaPagamentoDeBoleto()
    PagamentoBoletoPage.insereCodPagamento('561651465454354354869468465454954944946494635431')
    PagamentoBoletoPage.clicaBotaoContinuar()
    PagamentoBoletoPage.obterMensagemDeErroCodInvalido()

    });

})


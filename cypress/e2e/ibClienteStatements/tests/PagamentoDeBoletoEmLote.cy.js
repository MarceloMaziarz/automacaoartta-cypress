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

//                                         Efetua o pagamento em Lote

    MenuPage.acessarTelaPagamentoDeBoleto()
    PagamentoBoletoPage.clicaBotaoPagamentoBoletoEmLote()
    PagamentoBoletoPage.carregaArquivo('boleto.xlsx')
    PagamentoBoletoPage.clicaBotaoContinuar()
    PagamentoBoletoPage.obterMensagemDeSucesso()
    
    


    });

})


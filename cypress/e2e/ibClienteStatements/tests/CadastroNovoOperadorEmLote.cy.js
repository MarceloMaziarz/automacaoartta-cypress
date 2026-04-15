import MenuPage from "../Pages/MenuPage";
import SelecionarContaPage from "../Pages/SelecionarContaPage";
import OperadoresPage from "../Pages/OperadoresPage";
import PagamentoBoletoPage from "../Pages/PagamentoBoletoPage";

//                             Loga no IB cliente
describe('Cadastrar Novo operador', () => {
  beforeEach(() => {
    cy.loginIBClient()

  })

                                        
it('Cadastrar Novo Operador com Sucesso', () => {

//                                        Seleciona conta   
    SelecionarContaPage.clicaTrocarConta()
    SelecionarContaPage.selecionaConta('593966002-5')
    SelecionarContaPage.clicaBotaoConfirmar()

//                                        Seleciona Menu

    MenuPage.acessarTelaOperadores()

//                                        Cadastro Operador em Lote
/*  */
    
    OperadoresPage.clicaCadastroEmLote()
    OperadoresPage.carregaArquivo('operadoresLote.xlsx')
    OperadoresPage.obterMensagemDeInclusaoDeArquivo()
    OperadoresPage.clicaBotaoContinuar()
    OperadoresPage.validaOperadoresCriados()

    

   

    })
  })
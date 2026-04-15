import MenuPage from "../Pages/MenuPage";
import SelecionarContaPage from "../Pages/SelecionarContaPage";
import OperadoresPage from "../Pages/OperadoresPage";


//                             Loga no IB cliente
describe('Excluir operador', () => {
  beforeEach(() => {
    cy.loginIBClient()

  })

                                        
it('Excluir Operador com Sucesso', () => {

//                                        Seleciona conta   
    SelecionarContaPage.clicaTrocarConta()
    SelecionarContaPage.selecionaConta('593966002-5')
    SelecionarContaPage.clicaBotaoConfirmar()

//                                        Seleciona Menu

    MenuPage.acessarTelaOperadores()

//                                        Exclui Operador

   OperadoresPage.clicaBotaoExcluirOperador()
   OperadoresPage.validaSucessoNaExclusaoDeOperadores()

    })
  })
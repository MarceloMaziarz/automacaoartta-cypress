import MenuPage from "../Pages/MenuPage";
import SelecionarContaPage from "../Pages/SelecionarContaPage";
import OperadoresPage from "../Pages/OperadoresPage";
import { geraCPF } from "../../ibAdmin/utils/geraCPF";
import { gerarEmail } from "../utils/gerarEmail";

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

//                                        Cadastro Operador

    OperadoresPage.clicaBotaoNovoOperador()
    OperadoresPage.setNome('QA OP')
    const cpf = geraCPF()
    OperadoresPage.setCPF(cpf)
    const email = gerarEmail()
    OperadoresPage.setEmail(email)
    OperadoresPage.setCelular('41999998888')
    OperadoresPage.selecionaPerfil('Visualizador')
    OperadoresPage.clicaBotaoSalvar()
    OperadoresPage.validaSucessoNoCadastroDeOperadores()

    })
  })
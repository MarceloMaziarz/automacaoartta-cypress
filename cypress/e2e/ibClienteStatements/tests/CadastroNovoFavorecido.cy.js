import MenuPage from "../Pages/MenuPage";
import SelecionarContaPage from "../Pages/SelecionarContaPage";
import FavorecidosPage from "../Pages/FavorecidosPage";
import { geraCPF } from "../../ibAdmin/utils/geraCPF";

//                             Loga no IB cliente
describe('Cadastrar Novo Favorecido', () => {
  beforeEach(() => {
    cy.loginIBClient()

  })

  //                                       Aprovar Pagamento de Boletos
it('Cadastrar Novo Favorecido com Sucesso', () => {

//                                        Seleciona conta   
    SelecionarContaPage.clicaTrocarConta()
    SelecionarContaPage.selecionaConta('593966002-5')
    SelecionarContaPage.clicaBotaoConfirmar()

//                                        Seleciona Menu

    MenuPage.acessarTelaFavorecidos()

//                                        Cadastro Favorecido

    FavorecidosPage.clicaBotaoNovoFavorecido()
    FavorecidosPage.setNome('QA Teste')
    FavorecidosPage.setApelido('QA')
    const cpf = geraCPF()
    FavorecidosPage.setDocumento(cpf)
    FavorecidosPage.selecionaBanco('001 - BANCO DO BRASIL S/A')
    FavorecidosPage.selecionaTipoConta('Conta Corrente')
    FavorecidosPage.setAgencia('0001')
    FavorecidosPage.setConta('12345')
    FavorecidosPage.setDigitoConta('0')
    FavorecidosPage.clicaBotaoSalvar()
    FavorecidosPage.validaCadastroSucesso()

    })
  })
import MenuPage from "../Pages/MenuPage";
import SelecionarContaPage from "../Pages/SelecionarContaPage";
import FavorecidosPage from "../Pages/FavorecidosPage";
import { geraCPF } from "../../ibAdmin/utils/geraCPF";

//                             Loga no IB cliente
describe('Excluir Favorecido', () => {
  beforeEach(() => {
    cy.loginIBClient()

  })

  //                                       Aprovar Pagamento de Boletos
it('Excluir Favorecido com Sucesso', () => {

//                                        Seleciona conta   
    SelecionarContaPage.clicaTrocarConta()
    SelecionarContaPage.selecionaConta('593966002-5')
    SelecionarContaPage.clicaBotaoConfirmar()

//                                        Seleciona Menu

    MenuPage.acessarTelaFavorecidos()

//                                       Feito esse fluxo somente para renderizar na tela os dados a serem excluidos
   FavorecidosPage.clicaBotaoNovoFavorecido()
   FavorecidosPage.clicaBotaoCancelar()

//                                        Excluir Favorecido
   FavorecidosPage.clicaBotaoExcluir('QA Teste')
   FavorecidosPage.clicaBotaoConfirmar()
   FavorecidosPage.validaSucessoNaExclusaoDeFavorecido()
   

    })
  })
import SelecionarContaPage from "../Pages/SelecionarContaPage";
import ExtratoPage from "../Pages/ExtratoPage";




//                             Loga no IB cliente
describe('Download Extrato Excel', () => {

  beforeEach(() => {

    cy.loginIBClient()

})


it('Deve baixar e validar extrato Excel', () => {

 //                                        Seleciona conta   
    SelecionarContaPage.clicaTrocarConta()
    SelecionarContaPage.selecionaConta('593966002-5')
    SelecionarContaPage.clicaBotaoConfirmar()

//                                         Seleciona periodo

    ExtratoPage.selecionaPeriodo('0102202605032026')

//                                         faz o download e valida o arquivo
     
    ExtratoPage.clicaBotaoDownloadExtrato('Excel')


    })
  })





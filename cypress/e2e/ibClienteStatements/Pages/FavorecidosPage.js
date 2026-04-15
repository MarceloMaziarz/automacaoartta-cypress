/// <reference types="cypress"/>
import BasePage from "../../../core/BasePage"


class FavorecidosPage {

   clicaBotaoNovoFavorecido(){

        BasePage.clicaBotaoPorLink('/favored/new',{timeout:10000}).should('be.exist').click()

   }

   clicaBotaoNovoFavorecidoPIX(){

        BasePage.clicaBotaoPorLink('/pix/favored/new',{timeout:10000}).should('be.visable').click()

   }

   setNome(nome){

        BasePage.escrever('#favoredName-input',nome)

   }

   setApelido(apelido){

        BasePage.escrever('#favoredNickname-input', apelido)

   }

   setDocumento(documento){

        BasePage.escrever('#favoredDocument-input', documento)

   }

   selecionaBanco(banco){

    cy.get('#react-select-2-input')
         .should('be.visible')
         .click()

    cy.contains('.react-select__option', banco)
        .should('be.visible')
        .click()

   }

   selecionaTipoConta(conta){

      cy.get('#react-select-3-input')
         .should('be.visible')
         .click()

    cy.contains('.react-select__option', conta)
        .should('be.visible')
        .click()

   }

   setAgencia(agencia){

    BasePage.escrever('#favoredBankBranch-input',agencia)

   }

   setConta(conta){

    BasePage.escrever('#favoredBankAccount-input', conta)

   }

   setDigitoConta(digito){

    BasePage.escrever('#favoredBankAccountDigit-input', digito)

   }

   clicaBotaoSalvar(){

    BasePage.clicaBotaoPorTexto('Salvar').should('be.visible').click()


   }

   validaCadastroSucesso(){

      cy.xpath("//div[@class='Toastify__toast-body']", { timeout: 10000 })
                 .should('exist')
                 .and('contain.text', 'Favorecido cadastrado com sucesso')
  


   }

   clicaBotaoExcluir(nome){

    cy.contains('td', nome)
         .parents('tr')
         .find('button[class*="DeleteFavoredButton"]')
         .click()
 


   }

   clicaBotaoConfirmar(){

    BasePage.clicaBotaoPorTexto('Confirmar').click()

   }

   clicaBotaoCancelar(){

    BasePage.clicaBotaoPorTexto('Cancelar')
        .should('be.visible')
        .scrollIntoView()
        .click()

   }

   validaSucessoNaExclusaoDeFavorecido(){

     cy.xpath("//div[@class='Toastify__toast-body']", { timeout: 10000 })
                 .should('exist')
                 .and('contain.text', 'Favorecido excluído com sucesso')
  
   }


}
export default new FavorecidosPage()
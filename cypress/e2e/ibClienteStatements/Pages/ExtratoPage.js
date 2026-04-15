/// <reference types="cypress"/>
import BasePage from "../../../core/BasePage"




class ExtratoPage {

  
    
    clicarBotaoConfirmar(){
        cy.xpath("//button[@class='Button__StyledButton-sc-1kni2mh-0 lfWdMx']").click()

    }

    clicarBotaoPix(){
        BasePage.clicaBotaoPorLink('/pix').should('be.visible').click()


    }

    clicarBotaoPagarPix(){
        cy.xpath("//div[contains(@class, 'pix__PixOption') and contains(., 'Pagar com PIX')]").click()

    }


    selecionaFavorecido(favorecido) {
        const parteUnicaDoTexto = 'QA Testes - 08.923.120/0001-72';

        // Abre o react-select clicando no container, não no input
        cy.get('#react-select-2-input', { timeout: 10000 }).should('be.visible').click().type(favorecido);

        // Aguarda as opções renderizarem e seleciona
        cy.get('.react-select__menu', { timeout: 10000 }).should('be.visible').within(() => {
        cy.contains('.react-select__option', parteUnicaDoTexto).should('be.visible').click();
    });

    // Garante que o valor foi realmente selecionado
    cy.get('.react-select__single-value').should('contain.text', 'QA Testes');


}

    
    clicarBotaoContinuar(){

       BasePage.clicaBotaoPorTexto('Continuar').should('be.visible').click()  

       
    }



// ------------------------------------------Elementos Extrato Marcelo-------------------------------------------------------------------------------------


  selecionaPeriodo(periodo){

     cy.xpath("//input[@class='rs-date-range-input rs-input']",{ timeout: 20000 })
       .should('be.visible')
       .clear()
       .type(periodo)
     BasePage.clicaBotaoPorTexto('Aplicar').click()   

  }

 clicaBotaoDownloadExtrato(tipo) {
    // Aguarda o botão "Outras opções de arquivo" existir no DOM e estar visível
    cy.xpath("//button[@aria-label='Outras opções de arquivo']", { timeout: 20000 })
      .should('exist')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true }); // força o click caso algo esteja sobrepondo

    // Aguarda o menu de opções renderizar e seleciona o tipo desejado
    cy.contains('div', tipo, { timeout: 15000 })
      .should('exist')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true });

    // Opcional: esperar alguns milissegundos para garantir que o download iniciou
    cy.wait(500);


    cy.readFile('cypress/downloads/extrato-05-03-2026.xls', { timeout: 15000 })
         .should('exist')

    
 }

 //                                                     Botão extrato baixa o arquivo em PDF
    clicaBotaoExtratoPDF(){


        cy.xpath("//button[@aria-label='Baixar extrato']",{ timeout: 20000 })
            .should('exist')
            .should('be.visible')
            .scrollIntoView()
            .click({ force: true }); // força o click caso algo esteja sobrepondo

        cy.readFile('cypress/downloads/extrato-05-03-2026.pdf', { timeout: 15000 })
             .should('exist')



 }

 validaArquivoBaixadoOFX(){

     cy.readFile('cypress/downloads/extrato-05-03-2026.ofx', { timeout: 15000 })
             .should('exist')

 }

 validaArquivoBaixadoCSV(){

     cy.readFile('cypress/downloads/extrato-05-03-2026.csv', { timeout: 15000 })
             .should('exist')

 }

}

export default new ExtratoPage()
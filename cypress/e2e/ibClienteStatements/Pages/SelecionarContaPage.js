/// <reference types="cypress"/>

import BasePage from "../../../core/BasePage"


class SelecionarContaPage {

    clicaTrocarConta(){

         cy.xpath("//button[@class='Button__StyledButton-sc-1kni2mh-0 bXvNbx Header__SwitchButton-sc-14w9p49-0 gkaRSo']")
            .should('be.visible').click()
            

    }

    selecionaConta(conta){

        cy.xpath("//input[@placeholder='Pesquisar por Conta, Documento ou Nome']", {timeout: 20000})
           .should('be.visible').click().clear().type(conta)
        
        
        BasePage.clicaBotaoPorTexto('Selecionar Conta').should('be.visible').and('not.be.disabled').click()
    }

    clicaBotaoConfirmar(){

        BasePage.clicaBotaoPorTexto('Confirmar').should('be.visible').click()


    }



}
export default new SelecionarContaPage
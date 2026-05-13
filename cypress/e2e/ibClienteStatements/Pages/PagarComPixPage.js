/// <reference types="cypress"/>
import BasePage from "../../../core/BasePage"

class PagarComPixPage{

    clicaBotaoPagarComPix(){

        cy.get("[title='Pagar com PIX']", { timeout: 10000 })
            .should('be.visible').click()

    }

    selecionaComboFavorecido(favorecido){

        cy.get('#react-select-2-input', { timeout: 10000 })

            .should('be.visible')
            .click()
            //.type(favorecido, { delay: 50 }) // força o React atualizar

        cy.contains(favorecido, { timeout: 10000 })

            .should('be.visible')
            .click()
        
    }

    clicaBotaoContinuar(){

        BasePage.clicaBotaoPorTexto('Continuar', { timeout: 10000 })
            .should('be.visible')
            .and('not.be.disabled')
            .click()
    
    }



}
export default new PagarComPixPage()
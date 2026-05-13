/// <reference types="cypress"/>

import BasePage from "../../../core/BasePage"



class LimitesTedPage{

    clicaEditeLimite(){

        cy.get("//button[@aria-label='Editar Limite']", { timeout: 10000 })
            .should('be.visible')
            .and('not.be.disabled')
            .click()
        
    }

    insereLimite(valor){

        cy.get('#limit-input', { timeout: 10000 })
            .should('be.visible')
            .and('enable')
            .clear()
            .type(valor)
            .click()

    }

    clicaBotaoSalvar(){

        BasePage.clicaBotaoPorTexto('Salvar', { timeout: 10000 })
            .should('be.visible')
            .and('not.be.disabled')
            .click()

    }
    
    clicaBotaoConfirmar(){

        BasePage.clicaBotaoPorTexto('Confirmar', { timeout: 10000 })
            .should('be.visible')
            .click()

    }

    obterMensagemSucessoLimiteTED(){

        cy.xpath("//div[@class='rs-container']", { timeout: 10000 })
                     .should('be.visible')
                     .and('contain.text', 'Solicitação enviada com sucesso!')
    


    }


}

export default new LimitesPage
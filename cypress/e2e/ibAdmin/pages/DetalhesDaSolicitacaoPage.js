/// <reference types="cypress"/>

import BasePage from '../../../core/BasePage'

class DetalhesDaSolicitacaoPage{ 

    clicaBotaoAprovar(){

        BasePage.clicaBotaoPorTexto('Aprovar').should('be.visible').click()


    }

    confirmaBotaoAprovar(){

        cy.xpath("//div[contains(@class, 'flex justify-between')]//button[contains(text(), 'Aprovar')]").should('be.visible').click()

    }

    obterMensagemDeSucesso(){

             cy.get('#1', {timeout: 10000})
                 .should('exist')
                 .and('contain.text', 'Conta aprovada com sucesso!')


    }

    clicaBotaoRejeitar(){


        BasePage.clicaBotaoPorTexto('Rejeitar').should('be.visible').click()


    }

    clicaBotaoExcluir(){


        BasePage.clicaBotaoPorTexto('Excluir').should('be.visible').click()


    }


    confirmaBotaoExcluir(){


        cy.xpath("//div[contains(@class, 'flex justify-between')]//button[contains(text(), 'Excluir')]").should('be.visible').click()



    }

      confirmaBotaoRejeitar(){

        cy.xpath("//div[contains(@class, 'flex justify-between')]//button[contains(text(), 'Rejeitar')]").should('be.visible').click()

        
    }

    obterMensagemDeSucessoNaRejeicao(){


             cy.get('#1', {timeout: 1000})
                 .should('exist')
                 .and('contain.text', 'Conta rejeitada com sucesso!')


    }

    obterMensagemDeSucessoNaExclusao(){

         cy.get('#1', {timeout: 1000})
                 .should('exist')
                 .and('contain.text', 'Conta excluída com sucesso!')



    }


}
export default new DetalhesDaSolicitacaoPage();
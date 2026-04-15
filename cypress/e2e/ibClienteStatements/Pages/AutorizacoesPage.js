/// <reference types="cypress"/>

import BasePage from "../../../core/BasePage"



class AutorizacoesPage{

    clicaBotaoAprovar(){

        BasePage.clicaBotaoPorTexto('Aprovar').should('be.visible').click()

    }

    clicaBotaoReprovar(){


        BasePage.clicaBotaoPorTexto('Reprovar').should('be.visible').click()

    }

    ClicaBotaoConfirmaAutorizacao(){


        BasePage.clicaBotaoPorTexto('Confirmar').should('be.visible').click()


    }

    obterMensagemSucessoNaAprovacao(){

        cy.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--top-right']", { timeout: 10000 })
                 .should('be.visible')
                 .and('contain.text', 'Autorização criada com sucesso.')


    }

    obterMensagemSucessoNaTransacao(){

         cy.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--top-right']", { timeout: 10000 })
                 .should('be.visible')
                 .and('contain.text', 'Transação aprovada com sucesso')



    }

    obterMensagemSucessoNaReprovacao(){

         cy.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--top-right']", { timeout: 10000 })
                 .should('be.visible')
                 .and('contain.text', 'Transação reprovada com sucesso')



    }




}

export default new AutorizacoesPage
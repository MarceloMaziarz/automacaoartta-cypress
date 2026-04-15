/// <reference types="cypress"/>

import BasePage from "../../../core/BasePage"


class MenuPage {

    acessarTelaExtrato(){

        BasePage.clicaBotaoPorLink('/stetaments').should('be.visible').should('not.be.disabled').click()


    }

    acessarTelaPix(){

        BasePage.clicaBotaoPorLink('/pix').should('be.visible').should('not.be.disabled').click()


    }

     acessarTelaTransferencia(){

        BasePage.clicaBotaoPorLink('/transfer').should('be.visible').should('not.be.disabled').click()


    }

     acessarTelaPagamentoDeBoleto(){

        BasePage.clicaBotaoPorLink('/paymentInvoice').should('be.visible').should('not.be.disabled').click()


    }

     acessarTelaAutorizacoes(){

        BasePage.clicaBotaoPorLink('/authorization').should('be.visible').should('not.be.disabled').click()


    }

     acessarTelaAgendamentos(){

        BasePage.clicaBotaoPorLink('/scheduled').should('be.visible').should('not.be.disabled').click()


    }

    acessarTelaFavorecidos(){

        BasePage.clicaBotaoPorLink('/favored').should('be.visible').should('not.be.disabled').click()


    }

    acessarTelaCobranca(){

        BasePage.clicaBotaoPorLink('/charges').should('be.visible').should('not.be.disabled').click()


    }

    acessarTelaLimites(){

        BasePage.clicaBotaoPorLink('/limits').should('be.visible').should('not.be.disabled').click()


    }

    acessarTelaOperadores(){

        BasePage.clicaBotaoPorLink('/operators').should('be.visible').should('not.be.disabled').click()


    }

}
export default new MenuPage
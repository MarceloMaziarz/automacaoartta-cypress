import BasePage from '../../../core/BasePage'

class MenuPage{

    clicaMenuConvitesClientes(){


       BasePage.clicaBotaoPorLink('/invites')
        cy.contains('Convidar Cliente', { timeout: 10000 }).should('be.visible').click()



    }

    





}

export default new MenuPage

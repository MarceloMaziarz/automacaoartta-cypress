/// <reference types="cypress"/>
import BasePage from "../../../core/BasePage"


class ReceberPixPage {

    clicarSelecionarConta(){

        cy.xpath("//button[@class='Button__StyledButton-sc-1kni2mh-0 bXvNbx Header__SwitchButton-sc-14w9p49-0 gkaRSo']").should('be.visible').click()
        

    }

    setConta(conta){
        cy.wait(5000)
        cy.xpath("//input[@class='Header__CustomInput-sc-14w9p49-6 gaROLR']", {timeout: 10000}).click().clear().type(conta)
        
    }

    clicarBotaoSelecionarConta(){
        cy.xpath("//button[@class='Button__StyledButton-sc-1kni2mh-0 bXvNbx Header__ButtonSelect-sc-14w9p49-7 hSpcEv']").should('be.visible').click()

    }
    
    clicarBotaoConfirmar(){
        cy.xpath("//button[@class='Button__StyledButton-sc-1kni2mh-0 lfWdMx']").should('be.visible').click()

    }

    clicarBotaoPix(){

        BasePage.clicaBotaoPorLink('/pix').should('be.visible').click()

    }
}
export default new ReceberPixPage()
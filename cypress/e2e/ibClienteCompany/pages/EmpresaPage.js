
import BasePage from '../../../core/BasePage'


class EmpresaPage{

    selecionaTipoEmpresa(tipo) {

        BasePage.selecionaCombo('#react-select-2-live-region', tipo)   

    }

    selecionaCNAE(cnae) {

        BasePage.selecionaCombo('#react-select-3-live-region', cnae)    

    }

    selecionaNaturezaJuridica(valor) {

        BasePage.selecionaCombo('#react-select-4-live-region', valor)    
    }

    setRazaoSocial(nome) {

        
        BasePage.escrever('#companyName-input', nome)
    }

    setCNPJ(cnpj) {

        BasePage.escrever('#documentNumber-input',cnpj)

    }

    setInscricaoEstadual(numero = null) {

        if (numero != null) {

            BasePage.escrever('#stateRegistration-input', numero)

        } else {

            //              flega o botão "Isento"

            cy.get('#exemptStateRegistration').click({ force: true })
        }

    }

    setDataDeAbertura(data) {

        BasePage.escrever('#openingDate-input', data)

    }

    setTelefoneComercial(telefone) {

        BasePage.escrever('#phone-input', telefone )

    }

    setCEP(cep) {

        BasePage.escrever('#zip-input', cep)

    }

    setNumero(numero = null) {

        if (numero != null) {

            BasePage.escrever('#number-input', numero)

        } else {

            //              flega o botão "Não tenho número"

            cy.get('#noNumber').click({ force: true })

        }

    }

    setComplemento(complemento) {

        BasePage.escrever('#complement-input', complemento )

    }

    setEmailCorporativo(email) {

        BasePage.escrever('#companyEmail-input', email)

    }

    clicaOptanteSimplesNacional(resposta) {

        if (resposta == 'sim') {

            cy.get('#simplesNacional').click({ force: true })

        } else if (resposta == 'nao') {

        }

    }

    clicaFaturamentoMensal(valor) {

        switch (valor) {

            case '100000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;

            case '360000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;

            case '500000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;

            case '1000000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;

            case '3000000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;

            case '5000000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;

             case '10000000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;   

             case '50000000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;  

             case '100000000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;  

             case '500000000':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;  

             case '500000001':

                cy.xpath("//input[@value='" + valor + "']").click()
                break;     
        }
    }

    clicaBotaoProximo() {

        BasePage.clicaBotaoPorTexto('Próximo').should('be.visible').click()

    }

    obterMensagemDeSucesso(){


                 cy.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--top-right']", { timeout: 10000 })
                 .should('exist')
                 .and('contain.text', 'Empresa cadastrada com sucesso')
        
    }

    aguardaRua(){

        cy.xpath('//input[@value="Rua Benito del Rosário Gavilan Silva"]', {timeout:10000})

    }

    clicaEntendiAviso(){

        BasePage.clicaBotaoPorTexto('Entendi').should('be.visible').click()

    }

        
}
export default new EmpresaPage()
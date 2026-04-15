/// <reference types="cypress"/>

import BasePage from '../../../core/BasePage'


class SociosPagePF{

    clicaAdicionarSocio(){

        
        BasePage.clicaBotaoPorLink('/register/v2/partners/new').should('be.visible').click()

    }

    clicaBotaoTipoPessoa(tipo){

        BasePage.clicaBotaoPorTexto(tipo).should('be.visible').click()

    }

    setNomeCompleto(nome){

        BasePage.escrever('#fullName-input', nome)

    }

    setCPF(cpf){

        BasePage.escrever('#documentNumber-input', cpf)

    }

    setDataDeNascimento(data){

        BasePage.escrever('#birthdayDate-input', data)

    }

    setNomeDaMae(nome){

        BasePage.escrever('#motherName-input', nome)

    }

    setCelular(celular){

        BasePage.escrever('#phone-input', celular)

    }

    setEmail(email){

        BasePage.escrever('#email-input', email)

    }

    setCEP(cep){

        BasePage.escrever('#zip-input', cep)

    }

     setNumero(numero = null) {
    
            if (numero != null) {
    
                BasePage.escrever('#number-input', numero)
    
            } else {
    
//                         CLICA NO BOTÃO "NÃO TENHO NÚMERO" 
    
                cy.get('#noNumber').click({ force: true })
    
            }
    
        }

     setComplemento(complemento) {
    
            BasePage.escrever('#complement-input', complemento )
    
        } 

     selecionaTipoDocumentoParaFoto(tipo){

        cy.xpath("//div[text()='Selecione uma opção']").click({ force: true })
        cy.xpath("//div[text()='"+tipo+"']").click()

     }     


     upLoadDocumentoFrente(nome){

        BasePage.carregaArquivos('#front', nome)


     }

     upLoadDocumentoVerso(nome){

        BasePage.carregaArquivos('#back', nome)


     }

     clicaPessoaPoliticamenteExposta(resposta){

        if (resposta == 'sim') {
            
            cy.get('#publicPerson').click({ force: true })

        } else{
            
        }    
     }

     clicaBotaoAdicionar(){

        BasePage.clicaBotaoPorTexto('Adicionar').should('be.visible').click()

     }
        obterMensagemDeSucessoSocioCriado(){


           cy.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--top-right']", { timeout: 10000 })
                 .should('be.visible')
                 .and('contain.text', 'Sócio criado com sucesso')


     }


     upLoadContratoSocial(nome){

        BasePage.carregaArquivos('#file',nome)

     }

      obterMensagemDeSucessoSocioAdicionado(){

                cy.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--top-right']", { timeout: 10000 })
                 .should('be.visible')
                 .and('contain.text', 'Sócio criado com sucesso')


     }

     clicaBotaoProximo(){

        BasePage.clicaBotaoPorTexto('Próximo').should('be.visible').click()

     }

      setCNPJ(cnpj) {
     
             BasePage.escrever('#documentNumber-input',cnpj)
     
     }


}
export default new SociosPagePF()
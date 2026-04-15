/// <reference types="cypress"/>

import BasePage from '../../../core/BasePage'


class AdministradorPage{

     setNome(nome){

        BasePage.escrever('#name-input', nome)

    }

     setCPF(cpf){
    
        BasePage.escrever('#document-input', cpf)
    
        }

     setEmail(email){
     
         BasePage.escrever('#email-input', email)
     
         }   

     setCelular(celular){
         
         BasePage.escrever('#phone-input', celular)
         
        }

      clicaBotaoFinalizarRegistro(){

         BasePage.clicaBotaoPorTexto('Finalizar Registro').should('be.visible').click()

        }

     obterMensagemDeSucesso(){

         cy.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--top-right']", { timeout: 10000 })
                 .should('be.visible')
                 .and('contain.text', 'Administrador cadastrado com sucesso')
  

     }        

    validaMensagemRegistroFinalizadoComSucesso(){


          cy.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--top-right']", { timeout: 10000 })
                 .should('be.visible')
                 .and('contain.text', 'Registro finalizado com sucesso')

    }
         
}
export default new AdministradorPage()
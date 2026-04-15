/// <reference types="cypress"/>

import BasePage from '../../../core/BasePage'

class Documentos{

    upLoadDocumentosAtoConstitutivo(nome){


        BasePage.carregaArquivos('#documentCS', nome)


    }
    
    upLoadDocumentosCartaoCNPJ(nome){


        BasePage.carregaArquivos('#documentCNPJ', nome)


    }

    upLoadDocumentosAdicionais(nome){


        BasePage.carregaArquivos('#documentAdicional', nome)
             


    }

    obterMensagemDeSucesso(){

        cy.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--top-right']", { timeout: 10000 })
                 .should('exist')
                 .and('contain.text', 'Documentos da empresa adicionados com sucesso')
  
    }

    clicaBotaoProximo(){
    
            BasePage.clicaBotaoPorTexto('Próximo').should('be.visible').click()
    
         }


}
export default new Documentos()
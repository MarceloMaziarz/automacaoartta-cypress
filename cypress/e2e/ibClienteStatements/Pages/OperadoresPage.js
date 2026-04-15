/// <reference types="cypress"/>
import BasePage from "../../../core/BasePage"


class OperadoresPage {

    clicaBotaoNovoOperador(){


        BasePage.clicaBotaoPorLink('/operators/new').click()


    }

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

    selecionaPerfil(perfil){

        cy.get('#react-select-2-input')
            .should('be.visible')
            .click()

        cy.contains('.react-select__option', perfil)
            .should('be.visible')
            .click()

    }

    clicaBotaoSalvar(){

        BasePage.clicaBotaoPorTexto('Salvar').click()

    }


     validaSucessoNoCadastroDeOperadores(){

     cy.xpath("//div[@class='Toastify__toast-body']", { timeout: 10000 })
             .should('exist')
             .and('contain.text', 'Operador criado com sucesso')
  
   }

   clicaBotaoExcluirOperador(){

        cy.xpath("//button[@class='Button__StyledButton-sc-1kni2mh-0 ZlYEn']",{ timeout: 10000 })
             .should('be.visible')
             .first()
             .click()


   }

      validaSucessoNaExclusaoDeOperadores(){

     cy.xpath("//div[@class='Toastify__toast-body']", { timeout: 10000 })
            .should('exist')
            .and('contain.text', 'Operador removido com sucesso')
  
   }

   clicaCadastroEmLote(){


    BasePage.clicaBotaoPorLink('/operators/batch').click()


   }

   carregaArquivo(arquivo){

    BasePage.carregaArquivoEmLote(arquivo)


   }

   clicaBotaoContinuar(){

    BasePage.clicaBotaoPorTexto('Continuar').click()

   }

   obterMensagemDeInclusaoDeArquivo(){

    cy.xpath("//div[@class='batch__StyledDropzone-sc-1r2pqg7-0 hHcFKO']", { timeout: 10000 })
                 .should('be.visible')
                 .and('contain.text', 'Arquivo de lote incluído, clique em prosseguir para enviá-lo para processamento')


   }

   validaOperadoresCriados() {

        cy.get('[class*="batch__ProgressItem"]')
        .should('have.length.greaterThan', 0)
        .each(($el) => {
         cy.wrap($el)
        .find('.status')
        .should('contain', 'Criado')

    })
}

}
export default new OperadoresPage()
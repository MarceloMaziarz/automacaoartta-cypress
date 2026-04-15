import BasePage from '../../../core/BasePage'



class ConvidarClientePage{


    selecionaTipoDeConta(conta){

         cy.get('#react-select-2-input').should('be.visible').click()

         cy.contains('.react-select__option', conta, { timeout: 10000 })
              .scrollIntoView().should('be.visible').click()
}



    setRazaoSocial(nome) {
    
            
            BasePage.escrever('#name-input', nome)

        }


    setEmailConvite(email){


            BasePage.escrever('#email-input', email)


    }    

    setCNPJ(cnpj){

             
             BasePage.escrever('#document-input', cnpj)


    }

    setTaxaDeEntrada(valor){

        BasePage.escrever('#entryFee-input', valor)

    }

    setManutencaoConta(valor){

        BasePage.escrever('#accountMaintenanceFee-input', valor)

    }

    setTedOut(valor){

        BasePage.escrever('#tedOutFee-input', valor)


    }

    setPixOut(valor){

        BasePage.escrever('#pixOutFee-input', valor)


    }

    setEmissaoBoleto(valor){

         BasePage.escrever('#billetFee-input', valor)

    }


    setTaxaAberturaDeConta(valor){

        BasePage.escrever('#accountOpeningFee-input', valor)


    }

    clicaBotaoAdicionar(){

        BasePage.clicaBotaoPorTexto('Adicionar').should('be.visible').click()



    }

    obterMensagemDeSucesso(){

        cy.get('#1', {timeout:10000}).should('exist')
          .and('contain.text', 'Convite enviado com sucesso')
  

    }

    

}

export default new ConvidarClientePage

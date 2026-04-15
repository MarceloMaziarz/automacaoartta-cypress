class BasePage{

//                              CLICA BOTÃO  


    clicaBotaoPorTexto(texto){

       return cy.contains('button', texto, { timeout: 15000 })


    }

    clicaBotaoPorLink(link){


      return cy.get('a[href="'+link+'"]')

    }


//                              INPUT DE TEXTO    
     escrever(id,texto){

         cy.get(id, { timeout: 10000 }).should('be.visible').clear().type(texto).click()
            


    }

//                              COMBO    

    selecionaCombo(id, valor){

        cy.get(id).parent().should('be.visible').click()
            .contains(valor).click()

    
  
}

//                             UPLOAD DE ARQUIVOS

    carregaArquivos(id, nome){

        cy.get(id).attachFile(nome)

    }
    

 scrollAteElemento(seletor) {
  cy.get(seletor, { timeout: 20000 })
    .should('exist')
    .scrollIntoView({ easing: 'linear', duration: 500 })
    }

 carregaArquivoEmLote(arquivo){


            cy.get('input[type=file]')
                .selectFile(`cypress/fixtures/Files/${arquivo}`, { force: true })                              
    
    }


}
export default new BasePage()











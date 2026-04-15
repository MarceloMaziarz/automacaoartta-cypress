/// <reference types="cypress"/>

import BasePage from "../../../core/BasePage"

class PagamentoBoletoPage{

    insereCodPagamento(cod){

        cy.xpath("//input[@class='generate__Input-sc-1ldva7r-4 eDnJFS']")
             .click().clear().type(cod)


    }

    clicaBotaoContinuar(){

        BasePage.clicaBotaoPorTexto('Continuar', {timeout: 10000}).should('be.visible').click()
            


    }   

    insereObservacao(obs){

        cy.xpath("//textarea[@class='styles__Field-sc-9ke5ym-2 bIKHvp textarea--field undefined']")
             .click().clear().type(obs)


    }

    validaMensagemHorarioPagamento(){


        cy.xpath("//div[@class='InvoiceDateTimeError__Row-sc-13z36i1-0 jksIuY']", {timeout: 15000})
            .should('be.visible')
            .and('contain.text', 'Pagamentos de boleto só podem ser realizados das 08:00 às 17:00. Caso contrário, será agendado para o próximo dia útil bancário')


    }


    clicaBotaoConfirmar(){

        BasePage.clicaBotaoPorTexto('Confirmar', {timeout: 10000}).should('be.visible').click()
            

    }   



    clicaBotaoPagamentoBoletoEmLote(){


        BasePage.clicaBotaoPorLink('/paymentInvoice/billetBatch').click()

    }

     carregaArquivo(arquivo){
    
            BasePage.carregaArquivoEmLote(arquivo)
                                          
        
        }
    
    
        obterMensagemDeSucesso(){
    
    
              cy.xpath("//div[@class='Toastify__toast-body']", { timeout: 10000 })
                     .should('be.visible')
                     .and('contain.text', 'Lote de boletos emitido com sucesso!')
    
    
    
    }

}
export default new PagamentoBoletoPage()
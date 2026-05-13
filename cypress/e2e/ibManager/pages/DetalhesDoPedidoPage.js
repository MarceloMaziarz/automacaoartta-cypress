
class DetalhesDoPedidoPage{

    clicaBotaoCopiar(){

        cy.xpath("//button[text()='Copiar']").should('be.visible').click()

   
    }

    obterMensagemDeSucesso(){

       
         cy.get('#1', {timeout: 1000})
                 .should('exist')
                 .and('contain.text', 'Convite enviado com sucesso')


    }

    abrirLinkCopiado(){

        cy.getClipboardText().then((link) => {
            expect(link).to.be.a('string').and.not.be.empty
            cy.visit(link)
        })



    }

}
export default new DetalhesDoPedidoPage
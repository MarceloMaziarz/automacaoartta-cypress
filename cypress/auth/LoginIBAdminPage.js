import BasePage from '../core/BasePage'

class LoginIBAdminPage {

  acessar() {
    cy.visit('https://ib-admin-hml.artta.com.br/')
  }

 setEmail(email){
 
     BasePage.escrever('#username',email)
        
  }
 
 setSenha(senha){
 
     BasePage.escrever('#password',senha)
  } 
 
clicaBotaoEntrar(){

    cy.xpath("//input[@value='Entrar']").click()

 }

  validarLogin() {
    cy.contains('Abertura de Conta', { timeout: 10000 })
    .should('be.visible')
 }

 login(email, senha) {
    this.acessar()
    this.setEmail(email)
    this.setSenha(senha)
    this.clicaBotaoEntrar()
    this.validarLogin()
  }

}



export default LoginIBAdminPage

import BasePage from '../core/BasePage'

class LoginIBManagerPage {

  acessar() {
    cy.visit('https://ib-manager-hml.artta.com.br/invites/login')
    //cy.visit('https://ib-manager-qa2.artta.com.br/login')
    cy.get('#username', { timeout: 10000 }).should('be.visible')
  }

  setEmail(email) {

    BasePage.escrever('#username', email)
  }

  setSenha(senha) {

    BasePage.escrever('#password', senha)
  }

  clicaBotaoEntrar() {
    cy.xpath("//button[@type='submit']")
      .should('be.visible')
      .click()
  }

   validarLogin() {

    cy.contains('Manager Ronaldo LTDA', { timeout: 10000 })
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

export default LoginIBManagerPage

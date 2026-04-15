import BasePage from '../core/BasePage'

class LoginIBClientPage {

  acessar() {
    cy.visit('https://ib-hml.artta.com.br/statements')
    cy.get('#username', { timeout: 10000 }).should('be.visible') 
  }

  setEmail(email) {
    expect(email, 'email').to.be.a('string').and.not.be.empty   
    BasePage.escrever('#username', email)
  }

  setSenha(senha) {
    expect(senha, 'senha').to.be.a('string').and.not.be.empty
    BasePage.escrever('#password', senha)
  }

  clicaBotaoEntrar() {
    cy.xpath("//button[@type='submit']")    
      .should('be.visible')
      .click()
  }

  validarLogin() {
    cy.contains('Ronaldo Rissardo', { timeout: 10000 })
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

export default LoginIBClientPage
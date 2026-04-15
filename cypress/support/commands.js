

import LoginIBAdminPage from '../auth/LoginIBAdminPage'
import LoginIBManagerPage from '../auth/LoginIBManagerPage'
import LoginIBClientPage from '../auth/LoginIBClientPage'

Cypress.Commands.add('loginIBAdmin', () => {
  const email = Cypress.env('ADMIN_EMAIL')
  const senha = Cypress.env('ADMIN_PASSWORD')

  expect(email, 'ADMIN_EMAIL').to.be.a('string').and.not.be.empty
  expect(senha, 'ADMIN_PASSWORD').to.be.a('string').and.not.be.empty

  const loginPage = new LoginIBAdminPage()
  loginPage.login(email, senha)
})

Cypress.Commands.add('loginIBManager', () => {
  const email = Cypress.env('ADMIN_EMAIL_IBMANAGER')
  const senha = Cypress.env('ADMIN_PASSWORD_IBMANAGER')

  expect(email, 'ADMIN_EMAIL_IBMANAGER').to.be.a('string').and.not.be.empty
  expect(senha, 'ADMIN_PASSWORD_IBMANAGER').to.be.a('string').and.not.be.empty

  const loginPage = new LoginIBManagerPage()
  loginPage.login(email, senha)
})


Cypress.Commands.add('loginIBClient', () => {
  const email = Cypress.env('ADMIN_EMAIL_IBCLIENT')
  const senha = Cypress.env('ADMIN_PASSWORD_IBCLIENT')

  expect(email, 'ADMIN_EMAIL_IBCLIENT').to.be.a('string').and.not.be.empty
  expect(senha, 'ADMIN_PASSWORD_IBCLIENT').to.be.a('string').and.not.be.empty

  const loginPage = new LoginIBClientPage()
  loginPage.login(email, senha)

})
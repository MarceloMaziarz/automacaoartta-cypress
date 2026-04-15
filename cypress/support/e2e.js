import './commands'
import 'cypress-file-upload';
require('cypress-xpath');


//                                MOCKAR O CLIPBOARD

let clipboardText = null

Cypress.on('window:before:load', (win) => {
  if (!win.navigator.clipboard) return

  if (!win.navigator.clipboard.writeText.isSinonProxy) {
    cy.stub(win.navigator.clipboard, 'writeText')
      .callsFake((text) => {
        clipboardText = text
        return Promise.resolve()
      })
  }
})

Cypress.Commands.add('getClipboardText', () => {
  return cy.wrap(null).then(() => clipboardText)
})




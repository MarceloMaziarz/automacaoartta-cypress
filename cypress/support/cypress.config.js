const { defineConfig } = require('cypress')
console.log("CYPRESS CONFIG CARREGADO")

const path = require('path')
const XLSX = require('xlsx')

module.exports = defineConfig({

  chromeWebSecurity: false,

  downloadsFolder: 'cypress/downloads',

  e2e: {

    supportFile: 'cypress/support/e2e.js',
    
      setupNodeEvents(on, config) {

      console.log('CONFIG CYPRESS CARREGADO')

      on('task', {
        testeTask() {
          console.log('TASK EXECUTADA')
          return 'ok'
        }
      })

      return config
    },
    env: {
      ADMIN_EMAIL: 'dev@sbcash.com.br',
      ADMIN_PASSWORD: 'Admin@123',
      ADMIN_EMAIL_IBMANAGER: 'ronaldorissardo+managerhml@gmail.com',
      ADMIN_PASSWORD_IBMANAGER: '123456',
      ADMIN_EMAIL_IBCLIENT: 'ronaldorissardo+managerhml@gmail.com',
      ADMIN_PASSWORD_IBCLIENT: '123456'
    }
  }
})
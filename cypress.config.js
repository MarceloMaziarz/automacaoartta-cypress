const { defineConfig } = require('cypress')
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const path = require('path')

module.exports = defineConfig({
    e2e: {
     env: {
      ADMIN_EMAIL: 'dev@sbcash.com.br',
      ADMIN_PASSWORD: 'Admin@123',

      ADMIN_EMAIL_IBMANAGER: 'ronaldorissardo+managerhml@gmail.com',
      ADMIN_PASSWORD_IBMANAGER: '123456',

      ADMIN_EMAIL_IBCLIENT: 'ronaldorissardo+managerhml@gmail.com',
      ADMIN_PASSWORD_IBCLIENT: '123456'


    }
  },
  
    chromeWebSecurity: false,
  
});

  
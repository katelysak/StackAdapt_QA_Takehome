const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,

  e2e: {
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 5000,
    chromeWebSecurity: false,
    blockHosts: 'null',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    modifyObstructiveCode: false
  },
  env: {
    firstName: "Jane",
    lastName: "Doe",
    businessEmail: "jane.doe@advertising.com",
    phoneNumber: "+1112223344",
    companyName: "advertising.com",
    jobTitle: "Chief Executive Officer",
    companyType: "Publisher",  
    country: "Canada", 
    province: "Ontario"
  },
  "retries": {
    "runMode": 2,
    "openMode": 1
  }
})  
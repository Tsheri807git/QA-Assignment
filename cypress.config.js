const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  requestTimeout: 5000,
  waitForAnimations: true,
  e2e: {
    baseUrl: 'https://demo.nopcommerce.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false
  },
});

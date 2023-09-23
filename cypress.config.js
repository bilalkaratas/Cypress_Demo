const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  video: false,
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  retries : 0,
  
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  e2e: {
    baseUrl: "https://...",
    defaultCommandTimeout: 10000,       // Command timeout overridden for E2E tests
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
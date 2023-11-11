const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "6b3m9z",
  watchForFileChanges: false,
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    batch: {
      id: '8d4c9562-0923-4f38-b333-549c2f097d11',
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 54584,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },

  },
})

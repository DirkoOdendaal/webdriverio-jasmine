/**
 * This file holds all the shared config options
 * The rest of the files will extend options
 * More information about the config can be found
 * here https://webdriver.io/docs/configurationfile.html
 */
exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 4,
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'error',
    deprecationWarnings: false,
    bail: 2,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    specFileRetries: 1,
    connectionRetryCount: 2,
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        isVerbose: false,
        oneFailurePerSpec: true,
        failFast: true
    },

    // ========
    // Services
    // ========
    services: []
};

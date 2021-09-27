const {config} = require('./wdio.shared.conf');
const defaultBrowserSauceOptions = {
    build: `Best Practices: Sauce Labs Desktop Web build`,
    screenResolution: '1600x1200'
};

// =====================
// Sauce specific config
// =====================
config.user = process.env.SAUCELABS_USER;
config.key = process.env.SAUCELABS_AUTH_KEY;
config.region = 'eu';
// ============
// Capabilities
// ============
config.capabilities = [
    /**
     * Desktop browsers
     */
    {
        browserName: 'googlechrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...defaultBrowserSauceOptions,
        },
    },
];

// ========
// Services
// ========
config.services = config.services.concat('sauce');

exports.config = config;

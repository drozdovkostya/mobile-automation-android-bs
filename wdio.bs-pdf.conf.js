export const config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  services: ['browserstack'],

  specs: ['./test/specs/**/test.e2e.js'],
  mochaOpts: {
      timeout: 30000
  },
  capabilities: [
 {
    platformName: 'Android',

    'appium:automationName': 'UiAutomator2',

    'bstack:options': {
        deviceName: 'Google Pixel 7',
        osVersion: '13.0',

        projectName: 'Mobile Automation',
        buildName: 'WDIO Android 13 Build',
        sessionName: 'Android 13 Test',

        debug: true,
        networkLogs: true,
        video: true
    },
    'appium:app': process.env.APP_PATH,
    }
],

  framework: 'mocha',

  reporters: ['spec'],
};
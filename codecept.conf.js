exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://agendaonline.curitiba.pr.gov.br/',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    authenticatedPage: './pages/authenticated-page.js',
    homePage: './pages/home-page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'Web'
}
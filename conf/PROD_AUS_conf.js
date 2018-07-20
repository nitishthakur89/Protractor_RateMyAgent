exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://www.ratemyagent.com.au/',
  capabilities: {
	   'browserName': 'chrome'
  },
  specs: ['../test/*spec.js'],
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
}
# Protractor_RateMyAgent
sample tests for RateMyAgent angular website using Protractor -jasmine framework.
# Pre-Requisite
1. install node.js

2. Use npm to install Protractor globally with commanr => npm install -g protractor
This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

webdriver-manager update

Now start up a server with:
webdriver-manager start


# Run the test
naveigate to conf folder 
Now run the test with:

protractor PROD_AUS_conf.js

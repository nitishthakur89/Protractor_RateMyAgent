

describe('Protractor Demo App', function () {

	var home_page = require('..//page/home_page.js');
	var agent = require('..//page/agent.js');

	beforeEach(function () {
		browser.get('');
	}
	);



	it('Rate my agent login test cases', function () {


		home_page.EnterloginDetails('nitish.thakur89@hotmail.com', 'Rate@123');
		agent.validate_userid('nitish.thakur89')
		home_page.Logout();
	});









});
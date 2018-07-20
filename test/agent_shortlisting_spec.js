

describe('Protractor Demo App', function () {

	var home_page = require('..//page/home_page.js');
	var agent = require('..//page/agent.js');

	beforeEach(function () {
		browser.get('');
	}
	);



	it('Test case to shortlist Agents', function () {


		var state_Name = 'Victoria';

		//	var check_header = element(by.xpath(' //*[@id="ng-app"]/body/main/ui-view/ui-view/section/react-component/div/div[1]/div[2]/div/h1'));




		home_page.EnterloginDetails('nitish.thakur89@hotmail.com', 'Rate@123');
		agent.validate_userid('nitish.thakur89')
		agent.searbox_click();
		agent.search_box(state_Name)
		agent.searbox_firstrow_click();
		agent.agent_Tab_click();



		agent.agent_shortlist2_click();

		agent.shourlist_count('2');

		agent.agent_shortlist3_click();


		agent.shourlist_count('3');
		agent.shortlist_view();

		agent.remove_button_click();

		agent.shourlist_count('2');
		agent.remove_button_click();
		agent.shourlist_count('1');
		home_page.Logout();
	});









});
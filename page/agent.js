var agent = function () {


	var login_name_ui = element(by.xpath('//*[@id="ng-app"]/body/header/div[1]/div[2]/nav/div/button/div'));
	var searchbox = element(by.css('[ng-click="openAutoSearch()"]'));
	var searchbox_txt = element(by.id('searchBox'));
	var search_firstRow = element(by.xpath('//*[@id="ng-app"]/body/div[1]/div/div/div/div[3]/rma-auto-search-result-set[1]/div/div[2]/a[1]/div[1]'));
	var agent_count = element(by.xpath('//*[@id="ng-app"]/body/header/div[1]/div[2]/rma-header-shortlist-count/div/a/span'));
	var agent_Tab = element(by.cssContainingText('.LinkTab---this---oeZOV', 'Agents'));
	var agent_shortlist1 = element(by.xpath('//*[@id="ng-app"]/body/main/ui-view/ui-view/section/react-component/div/div[3]/div/div/div/div/div[2]/div/div[2]/div[1]/div/div/div[2]/div/div[2]/div[2]/a/i'));
	var agent_shortlist2 = element(by.xpath('//*[@id="ng-app"]/body/main/ui-view/ui-view/section/react-component/div/div[3]/div/div/div/div/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[2]/div[2]/a/span'));
	var agent_shortlist3 = element(by.xpath('//*[@id="ng-app"]/body/main/ui-view/ui-view/section/react-component/div/div[3]/div/div/div/div/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[2]/div[2]/a/span'));

	var remove_button = element(by.buttonText('Remove'));




	this.validate_userid = function (data_value) {
		this.waitforelement(login_name_ui);
		expect(login_name_ui.getText()).toEqual(data_value);
		console.log("userid validated for "+data_value);
	};

	this.search_box = function (value) {
		this.waitforelement(searchbox_txt);
		searchbox_txt.sendKeys(value);
		console.log("value entered in search box : "+value);
	};

	this.shourlist_count = function (value) {
		this.waitforelement(agent_count);
		expect(agent_count.getText()).toEqual(value);
		agent_count.getText().then(function (text) {
			console.log('shorlist count of agent :' + text);
		});
	};

	this.shortlist_view = function () {
		this.waitforelement(agent_count);
		agent_count.click();
		console.log("clicked on shortlist view.");
	};

	this.searbox_click = function () {
		this.waitforelement(searchbox);
		searchbox.click();
		console.log("clicked on shortlist view.");
	};

	this.searbox_firstrow_click = function () {
		this.waitforelement(search_firstRow);
		search_firstRow.click();
		console.log("first value selected from drop down");

	};

	this.agent_Tab_click = function () {
		this.waitforelement(agent_Tab);
		agent_Tab.click();
		console.log("clicked on Agent Tab.");
	};

	this.agent_shortlist1_click = function () {
		this.waitforelement(agent_shortlist1);
		agent_shortlist1.click();
		console.log("clicked on first shortlist icon.");
	};
	this.agent_shortlist2_click = function () {
		this.waitforelement(agent_shortlist2);
		agent_shortlist2.click();
		console.log("clicked on second shortlist icon.");
	};
	this.agent_shortlist3_click = function () {
		this.waitforelement(agent_shortlist3);
		agent_shortlist3.click();
		console.log("clicked on third shortlist icon.");
	};
	this.remove_button_click = function () {
		this.waitforelement(remove_button);
		remove_button.click();
		console.log("remove agent from list.");
	};
	this.waitforelement = function (element_value) {
		var until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(element_value), 10000, 'Element taking too long to appear in the DOM')
	};


};
module.exports = new agent();
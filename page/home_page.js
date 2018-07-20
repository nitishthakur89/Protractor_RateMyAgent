var home_page = function () {
  var login_link = element(by.linkText('LOG IN'));
  var username = element(by.model('login.Email'));
  var password = element(by.model('login.Password'));
  var login_btn = element(by.linkText('Log In'));
  var logout_username = element(by.binding('currentUser.name'))
  var logout_button = element(by.buttonText('Logout'));
  

  

  

  this.EnterloginDetails = function (username_value, password_value) {
    this.waitforelement(login_link);
    login_link.click();

    this.waitforelement(username);
    username.sendKeys(username_value);
    console.log("username entered : "+username_value);


    this.waitforelement(password);
    password.sendKeys(password_value);
    console.log("password entered.");

    this.waitforelement(login_btn);
    login_btn.click();
    console.log("clicked on Login button.");
  };

  this.Logout = function () {

    this.waitforelement(logout_username);
   logout_username.click();
   console.log("clicked on logout ");

   this.waitforelement(logout_button);
   logout_button.click();
   console.log("logout successfully.");
  };

 
  this.waitforelement = function (element_value) {
		var until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(element_value), 10000, 'Element taking too long to appear in the DOM')
	};


};
module.exports = new home_page();
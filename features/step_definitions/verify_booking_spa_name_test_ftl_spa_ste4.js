'use strict';

var assert=require('assert');
var width = 1366;
var height = 768;



module.exports = function() {
	this.World = require('../support/world.js').World;
	this.Given(/^booking spa name TEST_FTL_SPA_STE4 Ready for booking$/, function () {
		// this.driver.manage().window().setSize(width, height);
		this.driver.manage().window().maximize();
		this.driver.get("https://spabooking.aware.solutions/");
		this.driver.sleep(5000);
		
		
	});
	this.When(/^Click element search filter spaname$/, function () {
		this.driver.findElement({ css: '.search-filter' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(3500);
		
	});

	this.When(/^Provide spa TEST_FTL_SPA_STE4$/, function () {
		this.driver.findElement({ css: '.search-filter' }).then(function(ele){
			var sendskeys = ele.sendKeys('TEST_FTL_SPA_STE4');
		});
		this.driver.sleep(3500);
	});
	this.When(/^Click search spa name TEST_FTL_SPA_STE4$/, function () {
		this.driver.findElement({ css: 'div[class="search-button"] a[href="/search"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(9000);
	
	});

	this.When(/^Verify spa name TEST_FTL_SPA_STE4$/, function () {
		this.driver.findElement({ css: 'div[class="detail-left"] h3[title="TEST_FTL_SPA_STE4"]' }).then(function(ele){
			ele.getText().then(function (text) {
					assert.equal(text, "TEST_FTL_SPA_STE4");
			 });
		});
		
	});

	this.When(/^On serch result Package Single Room$/, function () {
		
		this.driver.sleep(2500);
	});

	this.When(/^Click booking$/, function () {
		this.driver.findElement({ css: 'div[class="section-col"] button:nth-child(1)' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(2500);
	});

	this.When(/^Provide bookingTime 09:00 am$/, function () {
		this.driver.findElement({ css: 'fieldset label:nth-child(7)' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(2500);
	});

	this.When(/^Click CHECK OUT$/, function () {
		this.driver.findElement({ css: 'div[class="card-body"] .text-center' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(3500);
	});
	this.When(/^Provide First and last name$/, function () {
		this.driver.findElement({ css: 'div[class="form-group"] input:nth-child(1)' }).then(function(ele){
			var sendskeys = ele.sendKeys('champ chuan');
		});
		this.driver.sleep(3500);
	
	});
	this.When(/^Provide email$/, function () {
		this.driver.findElement({ css: '.form-group input[type="email"]' }).then(function(ele){
			var sendskeys = ele.sendKeys('boomgt@gmail.com');
		});
		this.driver.sleep(3500);
	
	});
	this.When(/^Provide Reachable mobile number$/, function () {
		this.driver.findElement({ css: 'div[class="col-7"] input:nth-child(1)' }).then(function(ele){
			var sendskeys = ele.sendKeys('0931848557');
		});
		this.driver.executeScript("window.scrollBy(0,8500)");

	});
	this.When(/^Click Continue$/, function () {
		this.driver.findElement({ css: '.btn-sb-orange' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(1500);
	});
	this.When(/^Next step 2$/, function () {
		this.driver.executeScript("window.scrollTo({top: 0,down: 9100,behavior: 'smooth'})");
		this.driver.sleep(2500);
	});
	this.When(/^Click Select card Master Card$/, function () {
		this.driver.findElement({ css: 'div[class="form-group"] .dropdown' }).then(function(ele){
			var click = ele.click();
		});
		
		this.driver.sleep(1500);
	});
	this.When(/^Select card Master Card$/, function () {
		this.driver.findElement({ css: 'div[class="form-group"] .dropdown a:nth-child(3)' }).then(function(ele){
			var click = ele.click();
		});
		
		this.driver.sleep(1500);
	});

	this.When(/^Provide Card Holder Name$/, function () {
		this.driver.findElement({ css: 'div[class="mb-3"] input:nth-child(1)' }).then(function(ele){
			var sendskeys = ele.sendKeys('champ chuan');
		});
		
		this.driver.sleep(1200);
	});
	this.When(/^Provide City$/, function () {
		this.driver.findElement({ css: '.form-group input[placeholder="City"]' }).then(function(ele){
			var sendskeys = ele.sendKeys('Chiang Mai');
		});
		
		this.driver.sleep(1200);
	});
	this.When(/^Provide Postal Code$/, function () {
		this.driver.findElement({ css: '.form-group input[placeholder="Postal Code"]' }).then(function(ele){
			var sendskeys = ele.sendKeys('50180');
		});
		
		this.driver.sleep(1200);
	});
	this.When(/^Provide credit-no$/, function () {
		this.driver.findElement({ css: '.credit-card-no' }).then(function(ele){
			var sendskeys = ele.sendKeys('4242 4242 4242 4242');
		});
		
		this.driver.sleep(1200);
	});
	this.When(/^Provide credit card expired$/, function () {
		this.driver.findElement({ css: '.credit-card-expired' }).then(function(ele){
			var sendskeys = ele.sendKeys('12 2019');
		});
		
		this.driver.sleep(1200);
	});

	this.When(/^Provide credit cvc$/, function () {
		this.driver.findElement({ css: '.credit-card-cvc' }).then(function(ele){
			var sendskeys = ele.sendKeys('123');
		});
		
		this.driver.sleep(1200);
	});

	this.When(/^Click CHECK OUT to step 3$/, function () {
		this.driver.findElement({ css: '.btn-checkout' }).then(function(ele){
			var click = ele.click();
		});
		
		this.driver.sleep(5500);
	});

	this.Then(/^Application show booking Thank you. Your booking is complete$/, function () {
		this.driver.findElement({ css: '.complete-info div[class="card"] div[class="card-header"]' }).then(function(text){
			text.getText().then(function (get_text) {
				assert.equal(get_text, "Thank you. Your booking is complete.");
		 });
		});
		
		this.driver.sleep(3000);
	});



	
};




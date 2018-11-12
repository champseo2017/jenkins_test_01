'use strict';

var assert=require('assert');
var width = 1366;
var height = 768;



module.exports = function() {
	this.World = require('../support/world.js').World;
	this.Given(/^TEST_FTL_SPA_STE4 opening time Wed 09:00 AM - 10:00 PM and Start Application$/, function () {
		// this.driver.manage().window().setSize(width, height);
		this.driver.manage().window().maximize();
		this.driver.get("https://spabooking.aware.solutions/");
		this.driver.sleep(3500);
	});
	this.When(/^Click Element$/, function () {
		this.driver.findElement({ css: '.search-filter' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(3500);
	});
	this.When(/^Sends keys TEST_FTL_SPA_STE4$/, function () {
		this.driver.findElement({ css: '.search-filter' }).then(function(ele){
			var sendskeys = ele.sendKeys('TEST_FTL_SPA_STE4');
		});
		this.driver.sleep(3500);
	});
	this.When(/^Click datepicker$/, function () {
		this.driver.findElement({ css: '.filter-date-picker' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(3500);
	});
	this.When(/^Click datepicker today$/, function () {
		this.driver.findElement({ css: '.toda' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(3500);
	});

	this.When(/^Click serch$/, function () {
		this.driver.findElement({ css: 'div[class="search-button"] a[href="/search"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(8500);
	});
	this.When(/^click more$/, function () {
		this.driver.findElement({ css: '.more' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(8500);
	});
	this.Then(/^Application show search result list spa opening time  Wed 09:00 AM - 10:00 PM$/, function () {
		this.driver.findElement({ css: '.opening-time-bestspa span:nth-child(3)' }).then(function(ele){
			ele.getText().then(function (text) {
				var str = 'Wed (09:00 AM - 10:00 PM) ,';
				assert.equal(text,str);
		 });
		});
		this.driver.sleep(8500);
	});

	
	// this.When(/^Scodown find Element$/, function () {
	// 	this.driver.executeScript("window.scrollBy(0,14600)");
	// 	this.driver.sleep(15000);
	// });

	
// this.When(/^select open date$/, function () {
// 	this.driver.findElement({ css: '.spa-detail' }).then(function(ele){
// 		ele.getText().then(function (text) {
// 			var str = text;
			
// 			console.log(str);
// 		 });
// });
// this.driver.sleep(5000);
// });
};


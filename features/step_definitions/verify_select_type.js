'use strict';

var assert=require('assert');
var width = 1366;
var height = 768;

module.exports = function() {
	this.World = require('../support/world.js').World;

	this.Given(/^Open browser and Start Applicationroundtwo$/, function () {
		this.driver.manage().window().maximize();
		this.driver.get("https://spabooking.aware.solutions/");
	
		
	});

	this.When(/^Click inputfilter-spa-treatment$/, function () {
		this.driver.findElement({ css: '.filter-spa-treatment' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(1500);
	});
	this.When(/^Select Hotel Resort Spa$/, function () {
		this.driver.findElement({ css: 'li[value="Hotel / Resort Spa"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(1500);
	});

	this.When(/^Click Search$/, function () {
		this.driver.findElement({ css: 'div[class="search-button"] a[href="/search"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(5000);
	});

	this.Then(/^Application show search result list spatype Hotel ResortSpa$/, function () {
		this.driver.findElement({ css: 'div[class="spa-type-icons-container search-result"] span[class="icon"] img[src="/assets/images/icon_spatype_hotel.png"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(1500);
	});

};
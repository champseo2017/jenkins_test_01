'use strict';

var assert=require('assert');
var width = 1366;
var height = 768;



module.exports = function() {
	this.World = require('../support/world.js').World;

	this.Given(/^Spa have spa type all$/, function () {
		// this.driver.manage().window().setSize(width, height);
		this.driver.manage().window().maximize();
		this.driver.get("https://spabooking.aware.solutions/");
	
		
	});

	this.When(/^Click serch  default$/, function () {
		this.driver.findElement({ css: 'div[class="search-button"] a[href="/search"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(12000);
	});
	this.When(/^Application show spa type 1.medical$/, function () {
		this.driver.findElement({ css: 'div[class="spa-type-icons-container search-result"] span[class="icon"] img[src="/assets/images/icon_spatype_day.png"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.executeScript("window.scrollBy(0,14600)");
		this.driver.sleep(8500);
	});
	this.When(/^Application show spa type 2.hotel$/, function () {
		this.driver.findElement({ css: 'div[class="spa-type-icons-container search-result"] span[class="icon"] img[src="/assets/images/icon_spatype_hotel.png"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.executeScript("window.scrollTo({top: 12000,behavior: 'smooth'})");
		this.driver.sleep(8500);
	});
	this.When(/^Application show spa type 3.destination$/, function () {
		this.driver.findElement({ css: 'div[class="spa-type-icons-container search-result"] span[class="icon"] img[src="/assets/images/icon_spatype_destination.png"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(8500);
	});
	this.Then(/^Application show search result list spa type 1.medical 2.hotel 3.destination$/, function () {
		
		this.driver.sleep(8500);
	});
	
};
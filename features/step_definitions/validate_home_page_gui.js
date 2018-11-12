'use strict';

var assert=require('assert');
var width = 1366;
var height = 768;



module.exports = function() {
	this.World = require('../support/world.js').World;

	this.Given(/^Open browser and Start Application$/, function () {
		// this.driver.manage().window().setSize(width, height);
		this.driver.manage().window().maximize();
		this.driver.get("https://spabooking.aware.solutions/");
	
		
	});

	this.Then(/^Application Show menu Home$/, function () {
		this.driver.findElement({ css: 'div[id="navbarNav"] ul li a' }).then(function(ele){
			var click = ele.click('Home');
		});
		this.driver.sleep(1500);
	});
	this.Then(/^Application Show menu Best Spas in Thailand$/, function () {
		this.driver.findElement({ css: 'li[class="nav-item"] a[href="/best-spa"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(1500);
	});
	this.Then(/^Application Show menu Promotions$/, function () {
		this.driver.findElement({ css: 'li[class="nav-item"] a[href="/coupons"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(1500);
	});
	this.Then(/^Application Show menu FAQs$/, function () {
		this.driver.findElement({ css: 'li[class="nav-item"] a[href="/faq"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(1500);
	});
};
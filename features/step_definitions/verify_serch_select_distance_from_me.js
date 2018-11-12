'use strict';

var assert=require('assert');
var width = 1366;
var height = 768;



module.exports = function() {
	this.World = require('../support/world.js').World;

	this.Given(/^Open browser and Start Applicationroundtwo and spa TEST_FTL_SPA_STE4 Distance from me Asok Station$/, function () {
		// this.driver.manage().window().setSize(width, height);
		this.driver.manage().window().maximize();
		this.driver.get("https://spabooking.aware.solutions/");
	});
	this.Then(/^Click filter-distance$/, function () {
		this.driver.findElement({ css: '.filter-distance' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(1500);
	});
	this.Then(/^Select Asok Station$/, function () {
		this.driver.findElement({ css: 'li[value="Asok Station"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(1500);
	});
	this.Then(/^Click Search Distance from me$/, function () {
		this.driver.findElement({ css: 'div[class="search-button"] a[href="/search"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(5000);
	});
	this.Then(/^Application show search result list spa TEST_FTL_SPA_STE4$/, function () {
		this.driver.findElement({ css: 'div[class="detail-left"] h3[title="TEST_FTL_SPA_STE4"]' }).then(function(ele){
			ele.getText().then(function (text) {
					assert.equal(text, "TEST_FTL_SPA_STE4");
			 });
		});
		this.driver.sleep(1500);
	});
};
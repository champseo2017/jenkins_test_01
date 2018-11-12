'use strict';

var assert=require('assert');

module.exports = function() {
	this.World = require('../support/world.js').World;

	this.Given(/^Open browser and Start Application$/, function () {
		this.driver.get("https://www.google.co.in/");
	});

	this.Then(/^I click the button$/, function () {
		this.driver.findElement({ name: 'btn' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(55000);
	});
};
'use strict';

var assert=require('assert');
var width = 1366;
var height = 768;


module.exports = function() {
	this.World = require('../support/world.js').World;
	this.Given(/^Open browser and Start Application and spa name Let's Relax at Ekkamai have room and THERAPIST enough$/, function () {
		// this.driver.manage().window().setSize(width, height);
		this.driver.manage().window().maximize();
		this.driver.get("https://spabooking.aware.solutions/");
		this.driver.sleep(3500);
    });
    this.When(/^Click element input filter guest room$/, function () {
		this.driver.findElement({ css: '.filter-guest-room' }).then(function(ele){
            var click = ele.click();
		});
		this.driver.sleep(8500);
    });
    this.When(/^click button up$/, function () {
		this.driver.findElement({ css: 'button[data-dir="up"]' }).then(function(ele){
            var click_1 = ele.click();
            
		});
		this.driver.sleep(8500);
    });
    this.When(/^Click serch guest$/, function () {
		this.driver.findElement({ css: 'div[class="search-button"] a[href="/search"]' }).then(function(ele){
			var click = ele.click();
		});
		this.driver.sleep(18000);
    });
    this.When(/^Verify spa Let's Relax at Ekkamai$/, function () {
		this.driver.findElement({ css: 'div[class="detail-left"] a[href="/spa/detail?id=9"] h3' }).then(function(ele){
        ele.getText().then(function (text) {
            var str = "Let's Relax at Ekkamai";
			assert.equal(text,str);
		});
		});
		this.driver.sleep(3000);
    });
    this.Then(/^Application show search result list spa name Let's Relax at Ekkamai and have dropdown 2 guest$/, function () {
		this.driver.findElement({ css: 'a[id="ddlCity"]' }).then(function(ele){
        ele.getText().then(function (text) {

            var str = "2 Guests";
			assert.equal(text,str);
			
		});
		});
		this.driver.sleep(5000);
	});

};


@spabooking.aware.solutions[production][Build10045]
Feature: Verify serch select filter guest room

Scenario: Application show search result list spa name Let's Relax at Ekkamai and have dropdown 2 guest

Given Open browser and Start Application and spa name Let's Relax at Ekkamai have room and THERAPIST enough
When Click element input filter guest room
When click button up
When Click serch guest
When Verify spa Let's Relax at Ekkamai
Then Application show search result list spa name Let's Relax at Ekkamai and have dropdown 2 guest
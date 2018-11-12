@spabooking.aware.solutions[production][Build10045]
Feature: Verify serch default

Scenario: Application show search result list spa type 1.medical 2.hotel 3.destination

Given Spa have spa type all
When Click serch  default
When Application show spa type 1.medical
When Application show spa type 2.hotel
When Application show spa type 3.destination
Then Application show search result list spa type 1.medical 2.hotel 3.destination





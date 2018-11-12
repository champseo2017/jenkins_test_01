@spabooking.aware.solutions[production][Build10045]
Feature: Verify select type Hotel / Resort Spa 

Scenario: Application show search result list spatype Hotel / Resort Spa 

Given Open browser and Start Applicationroundtwo
When Click inputfilter-spa-treatment
When Select Hotel Resort Spa
When Click Search 
Then Application show search result list spatype Hotel ResortSpa 
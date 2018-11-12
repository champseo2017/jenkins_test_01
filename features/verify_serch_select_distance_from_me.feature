@spabooking.aware.solutions[production][Build10045]
Feature: Verify serch select Distance from me Asok Station

Scenario: Application show search result list spa TEST_FTL_SPA_STE4

Given Open browser and Start Applicationroundtwo and spa TEST_FTL_SPA_STE4 Distance from me Asok Station
When Click filter-distance
When Select Asok Station
When Click Search Distance from me
Then Application show search result list spa TEST_FTL_SPA_STE4
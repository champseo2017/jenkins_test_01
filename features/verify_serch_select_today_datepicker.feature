@spabooking.aware.solutions[production][Build10045]
Feature: Verify serch select today datepicker

Scenario: Application show search result list spa opening time Mon (09:00 AM - 08:00 PM)

Given TEST_FTL_SPA_STE4 opening time Wed 09:00 AM - 10:00 PM and Start Application
When Click Element
When Sends keys TEST_FTL_SPA_STE4
When Click datepicker
When Click datepicker today
When Click serch
When click more
Then Application show search result list spa opening time  Wed 09:00 AM - 10:00 PM





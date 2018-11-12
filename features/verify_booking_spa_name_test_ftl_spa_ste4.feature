@spabooking.aware.solutions[production][Build10045]
Feature: Verify booking spa name TEST_FTL_SPA_STE4

Scenario: Application booking Success

Given booking spa name TEST_FTL_SPA_STE4 Ready for booking
When Click element search filter spaname
When Provide spa TEST_FTL_SPA_STE4
When Click search spa name TEST_FTL_SPA_STE4
When Verify spa name TEST_FTL_SPA_STE4
When On serch result Package Single Room
When Click booking
When Provide bookingTime 09:00 am
When Click CHECK OUT
When Provide First and last name
When Provide email
When Provide Reachable mobile number
When Click Continue
When Next step 2
When Click Select card Master Card
When Select card Master Card
When Provide Card Holder Name
When Provide City
When Provide Postal Code
When Provide credit-no
When Provide credit card expired
When Provide credit cvc
When Click CHECK OUT to step 3
Then Application show booking Thank you. Your booking is complete














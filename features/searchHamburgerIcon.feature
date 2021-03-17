Feature: Search functionality of amazon
In order to check the functionality of Search
  As a user
  I need to be able to test different scenario

Scenario: User should be able search product 
 Given user goes to URL "https://www.amazon.com/"
  And user clicks the hamburger icon
  And user selects any category
  And user selects any subcategory
 When user enters "taylormusic" in the search field
 Then user clicks on Search Icon







 



Feature: Search functionality of amazon
In order to check the functionality of Search
  As a user
  I need to be able to test different scenario

Scenario: User should be able filter searched product
 Given user goes to URL "https://www.amazon.com/"
 When user enters "pcheadset" in the search field
 Then user clicks on Search Icon
    And user clicks the highest star rating
    And user clicks the brand name checkbox






 



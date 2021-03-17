Feature: Search functionality of amazon
In order to check the functionality of Search
  As a user
  I need to be able to test different scenario

Scenario: User should be able to see added product in the cart
 Given user goes to URL "https://www.amazon.com/"
 When user enters "pcheadset" in the search field
    And user clicks on Search Icon
    And user clicks on product
    And user clicks on add to cart 
    And user checks the add to cart container
 Then "Subtotal (1 item):" message should be displayed





 



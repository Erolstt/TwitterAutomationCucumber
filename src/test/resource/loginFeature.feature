Feature: This is login feature for twitter

  Scenario: Login twitter with valid credentials
    Given I navigate to twitter
    When I try to login with valid credentials
    Then I should see that I logged in successfully

  Scenario: Searching given username
    Given I navigate to twitter
    When I try to login with valid credentials
    When I search "erolstt"
    Then I should see "erolstt" in the search result

  Scenario: Sending tweet
    Given I navigate to twitter
    When I try to login with valid credentials
    And I tweet "Some tweets"
    Then I should see "Some tweets" on my stream
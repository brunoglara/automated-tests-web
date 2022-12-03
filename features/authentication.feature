Feature: Authentication

  Scenario: Do login
    Given a user previously registered in home page
    When enter the authentication data
    Then he is in the authenticated area

  Scenario: Do log Out
    Given a user logged
    When he sign out
    Then he is in the home page

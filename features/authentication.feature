Feature: Authentication

  # Scenario: do login
  #   Given a user previously registered in home page
  #   When enter the authentication data
  #   Then he is in the authenticated area

  # Scenario: do log Out
  #   Given a user logged
  #   When he sign out
  #   Then he is in the home page

  Scenario: change profile data
    Given a user logged
    When he change profile data
    Then profile is updated
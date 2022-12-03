Feature: Profile

    Scenario: Change profile data
        Given a user logged
        When he change profile data
        Then profile is updated
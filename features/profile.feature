Feature: Profile

    As a Curitiba citzen
    I want schedule a Curitiba city hall service
    So that I can consume a service provided by Curitiba city hall

    Scenario: Change profile data
        Given the user logged
        When he change profile data
        Then the profile is updated
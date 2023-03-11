Feature: Authentication

    As a Curitiba citzen
    I want schedule a Curitiba city hall service
    So that I can consume a service provided by Curitiba city hall

    Scenario: Do login
        Given the user previously registered in home page
        When enter the authentication data
        Then he is in the authenticated area

    Scenario: Do log Out
        Given the user logged
        When he sign out
        Then he is in the home page
Feature: Regres
    In order to keep Regres api stable
    As a tester
    I want to make sure that everything works as expected

    @focus
    Scenario: Check Tea Pot
        Given I make a GET request to "http://httpbin.org/status/418"
        When I receive a response
        Then response should have a status 418
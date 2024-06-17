Feature: Show/Hide an event's details

  Scenario: When the details of an event are hidden by default
    Given the main page is open
    When the app displays a list of events
    Then the event details are hidden by default

  Scenario: User can show event details
    Given the main page is open
    When the user clicks on the "show details" button for an event
    Then the event details section is visible

  Scenario: User can hide event details
    Given the main page is open
    And the event details are shown
    When the user clicks on the "hide details" button for an event
    Then the event details section is hidden

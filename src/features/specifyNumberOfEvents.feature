Feature: Specify Number of Events

  Scenario: Default number of events is 32
    Given the main page is open
    When the user does not specify the number of events
    Then the default number of displayed events is 32

  Scenario: User specifies the number of events to display
    Given the main page is open
    When the user sets the number of events to 10
    Then the app should display 10 events

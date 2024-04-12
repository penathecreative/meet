# meet
A Serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

### User Stories
1.As a user, 
I should be able to show/hide event details, 
so that I can control the amount of information displayed for each event.

2.As a user, 
I should be able to specify the number of events I want to view in the app, 
so that I can customize the density of events displayed in the events list according to my preference.

3.As a user,
I should be able to use the app when offline, 
so that I can access previously viewed events even without an internet connection.

4.As a user, 
I should be able to add the app shortcut to my home screen, 
so that I can conveniently launch the app with a single tap.

5.As a user, 
I should be able to see a chart displaying upcoming events in each city, 
so that I can easily identify events organized in different cities and plan accordingly.


### Scenarios 

* *SCENARIO 1*

Feature: Show/Hide Event Details

Scenario: User wants to show event details
  **Given** I am viewing an event
  **When** I choose to show event details
  **Then** I should see more information about the event

Scenario: User wants to hide event details
  **Given** I am viewing an event with details shown
  **When** I choose to hide event details
  **Then** I should see less information about the event


* *SCENARIO 2*

Feature: Specify Number of Events to View

Scenario: User wants to view more events
  **Given** I am viewing the events list
  **When** I specify to view a larger number of events
  **Then** I should see more events in the list

Scenario: User wants to view fewer events
  **Given** I am viewing the events list
  **When** I specify to view a smaller number of events
  **Then** I should see fewer events in the list


* *SCENARIO 3*

Feature: Use App Offline

Scenario: User wants to use the app offline
  **Given** I have previously viewed events
  **When** I use the app without an internet connection
  **Then** I should be able to see the events I viewed last time


* *SCENARIO 4*

Feature: Add App Shortcut to Home Screen

Scenario: User wants to add app shortcut to home screen
  **Given** I have the app installed on my device
  **When** I add the app shortcut to my home screen
  **Then** I should be able to open the app faster with a shortcut


* *SCENARIO 5*

Feature: See Chart for Upcoming Events in Each City

Scenario: User wants to see chart for upcoming events in cities
  **Given** I am using the app
  **When** I navigate to the chart section
  **Then** I should see a chart displaying upcoming events in each city




* *USE OF SERVERLESS FUNCTION IN THE MEET APP* *

A serverless functions could be utilized to handle backend logic and provide dynamic functionality without the need for managing server infrastructure. For example, when a user requests to show/hide event details or specify the number of events to view, serverless functions could process these requests by retrieving or manipulating data from a database or other external sources. Similarly, when a user wants to use the app offline, serverless functions could facilitate data caching and synchronization between the client and server.



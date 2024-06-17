import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { render, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App"; // Assuming you have an App component that displays the Event component
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  // Scenario 1
  test("When the details of an event are hidden by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the app displays a list of events", async () => {
      const EventListDOM = AppComponent.container.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0); // Assuming there's at least one event
      });
    });

    then("the event details are hidden by default", () => {
      const eventDetails = AppComponent.queryByText("Event details");
      expect(eventDetails).toBeNull();
    });
  });

  // Scenario 2
  test("User can show event details", ({ given, when, then }) => {
    let EventComponent;

    given("the main page is open", () => {
      AppComponent = render(<App />);
    });
    when(
      'the user clicks on the "show details" button for an event',
      async () => {
        const showDetails = EventComponent.queryByText("show details");
        await userEvent.click(showDetails);
      }
    );

    then("the event details section is visible", async () => {
      expect(
        EventComponent.container.querySelector(".details")
      ).toBeInTheDocument();
      expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    });
  });
});

// Scenario 3
test("User can hide event details", ({ given, and, when, then }) => {
  let EventComponent;
  let allEvents;

  given("the main page is open", async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
    await userEvent.click(EventComponent.queryByText("show details"));
    expect(
      EventComponent.container.querySelector(".details")
    ).toBeInTheDocument();
  });

  and("the event details are shown", () => {
    // Assuming the details are shown by the previous step
  });

  when(
    'the user clicks on the "hide details" button for an event',
    async () => {
      const hideDetails = EventComponent.queryByText("hide details");
      await userEvent.click(hideDetails);
    }
  );

  then("the event details section is hidden", () => {
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
    expect(EventComponent.queryByText("hide details")).not.toBeInTheDocument();
  });
});

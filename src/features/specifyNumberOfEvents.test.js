import React from "react";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { defineFeature, loadFeature } from "jest-cucumber";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  // Scenario 1
  test("Default number of events is 32", ({ given, when, then }) => {
    let AppComponent;

    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the user does not specify the number of events", () => {
      // No actions needed as the default number of events should be set
    });

    then("the default number of displayed events is 32", async () => {
      await waitFor(() => {
        const eventListItems =
          AppComponent.container.querySelectorAll(".event");
        expect(eventListItems.length).toBe(32); // Assuming '.event' is the correct selector for event items
      });
    });
  });

  // Scenario 2
  test("User specifies the number of events to display", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the user sets the number of events to 10", async () => {
      const user = userEvent.setup();
      const textBox = AppComponent.container.querySelector("#numberOfEvents");
      await user.clear(textBox); // Clear existing value
      await user.type(textBox, "10"); // Type the new value
    });

    then("the app should display 10 events", async () => {
      await waitFor(() => {
        const eventList = AppComponent.container.querySelector("#event-list");
        const eventItems = within(eventList).queryAllByRole("listitem");
        expect(eventItems.length).toBe(10);
      });
    });
  });
});

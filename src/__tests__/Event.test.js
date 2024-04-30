// src/components/Event.test.js

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Event from "../components/Event"; // Import Event
import { getEvents } from "../api.js";

describe("<EventList /> component", () => {
  test("renders correct number of events", () => {
    const { getAllByRole } = render(<EventList events={mockEvents} />);
    const eventItems = getAllByRole("listitem");
    expect(eventItems.length).toBe(mockEvents.length);
  });

  test("renders event start time", async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.getByText("Start Time: " + allEvents[0].created)
    ).toBeInTheDocument();
  });

  test("renders event location", async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.getByText("Location: " + allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details button with the title 'show details'", async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(EventComponent.getByText("show details")).toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const { getByTestId, queryByTestId } = render(<Event event={[]} />);
    const showDetailsButton = getByTestId("show-details-button");

    fireEvent.click(showDetailsButton);

    expect(queryByTestId("event-details")).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'show details' button again", async () => {
    const { getByTestId, queryByTestId } = render(<Event event={[]} />);
    const showDetailsButton = getByTestId("show-details-button");

    fireEvent.click(showDetailsButton); // Show details
    fireEvent.click(showDetailsButton); // Hide details

    expect(queryByTestId("event-details")).not.toBeInTheDocument();
  });
});

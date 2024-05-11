// src/components/Event.test.js

import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });
  beforeEach(async () => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders event's titles", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders events start time", () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("event details are hidden by default", () => {
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeNull();
  });

  test("shows details section when the user clicks on 'show details' button", async () => {
    const showDetailsButton = EventComponent.queryByText("show details");
    await userEvent.click(showDetailsButton);
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on 'show details' button again", async () => {
    const showDetailsButton = EventComponent.queryByText("show details");
    await userEvent.click(showDetailsButton); // Show details
    await userEvent.click(showDetailsButton); // Hide details
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeNull();
  });
});

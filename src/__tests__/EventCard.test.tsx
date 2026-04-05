import { render, screen } from "@testing-library/react-native";
import React from "react";
import EventCard from "../components/EventCard";

describe("EventCard", () => {
  const props = {
    title: "Youth Camp",
    description: "An amazing retreat.",
    month: "JUN",
    day: "07",
  };

  it("renders the event title", () => {
    render(<EventCard {...props} />);
    expect(screen.getByText("Youth Camp")).toBeTruthy();
  });

  it("renders the event description", () => {
    render(<EventCard {...props} />);
    expect(screen.getByText("An amazing retreat.")).toBeTruthy();
  });

  it("renders the month", () => {
    render(<EventCard {...props} />);
    expect(screen.getByText("JUN")).toBeTruthy();
  });

  it("renders the day", () => {
    render(<EventCard {...props} />);
    expect(screen.getByText("07")).toBeTruthy();
  });
});

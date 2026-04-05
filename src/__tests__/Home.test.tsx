import { render, screen } from "@testing-library/react-native";
import React from "react";
import Home from "../pages/Home";

describe("Home", () => {
  it("renders the Recently Uploaded section", () => {
    render(<Home />);
    expect(screen.getByText("Recently Uploaded")).toBeTruthy();
  });

  it("renders the Upcoming Events section", () => {
    render(<Home />);
    expect(screen.getByText("Upcoming Events")).toBeTruthy();
  });

  it("renders the Life Groups section", () => {
    render(<Home />);
    expect(screen.getByText("Life Groups")).toBeTruthy();
  });

  it("renders the Daily Verse section", () => {
    render(<Home />);
    expect(screen.getByText("Daily Verse")).toBeTruthy();
  });

  it("renders event cards", () => {
    render(<Home />);
    expect(screen.getByText("18th Year Anniversary")).toBeTruthy();
  });

  it("renders the featured card", () => {
    render(<Home />);
    expect(screen.getByText("LATEST SERMON")).toBeTruthy();
  });

  it("renders video titles", () => {
    render(<Home />);
    expect(screen.getByText("Vision Sunday")).toBeTruthy();
  });

  it("renders ministry titles", () => {
    render(<Home />);
    expect(screen.getByText("Kids")).toBeTruthy();
  });
});

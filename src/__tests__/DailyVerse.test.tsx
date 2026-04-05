import { render, screen } from "@testing-library/react-native";
import React from "react";
import DailyVerse from "../components/DailyVerse";

describe("DailyVerse", () => {
  it("renders the verse text", () => {
    render(<DailyVerse />);
    expect(screen.getByText(/For God so loved the world/)).toBeTruthy();
  });

  it("renders the verse reference", () => {
    render(<DailyVerse />);
    expect(screen.getByText(/John 3:16/)).toBeTruthy();
  });

  it("renders the decorative quote mark", () => {
    render(<DailyVerse />);
    expect(screen.getByText("\u201C")).toBeTruthy();
  });
});

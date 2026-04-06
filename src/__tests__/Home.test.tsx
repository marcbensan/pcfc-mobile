import { render, screen } from "@testing-library/react-native";
import React from "react";
import Home from "../pages/Home";

const mockNavigate = jest.fn();

describe("Home", () => {
  it("renders the Recent Sermons section", () => {
    render(<Home navigate={mockNavigate} />);
    expect(screen.getByText("Recent Sermons")).toBeTruthy();
  });

  it("renders the Upcoming Events section", () => {
    render(<Home navigate={mockNavigate} />);
    expect(screen.getByText("Upcoming Events")).toBeTruthy();
  });

  it("renders the Life Groups section", () => {
    render(<Home navigate={mockNavigate} />);
    expect(screen.getByText("Life Groups")).toBeTruthy();
  });

  it("renders the Verse of the Day section", () => {
    render(<Home navigate={mockNavigate} />);
    expect(screen.getByText("Verse of the Day")).toBeTruthy();
  });

  it("renders event cards", () => {
    render(<Home navigate={mockNavigate} />);
    expect(screen.getByText("18th Year Anniversary")).toBeTruthy();
  });

  it("renders the featured card", () => {
    render(<Home navigate={mockNavigate} />);
    expect(screen.getByText("LATEST SERMON")).toBeTruthy();
  });

  it("renders video titles", () => {
    render(<Home navigate={mockNavigate} />);
    expect(screen.getByText("Vision Sunday")).toBeTruthy();
  });

  it("renders ministry titles", () => {
    render(<Home navigate={mockNavigate} />);
    expect(screen.getByText("Kids")).toBeTruthy();
  });
});

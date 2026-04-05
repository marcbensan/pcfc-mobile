import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";
import SectionHeader from "../components/SectionHeader";

describe("SectionHeader", () => {
  it("renders the title", () => {
    render(<SectionHeader title="Test Section" />);
    expect(screen.getByText("Test Section")).toBeTruthy();
  });

  it("renders See All button when onSeeAll is provided", () => {
    render(<SectionHeader title="Test" onSeeAll={() => {}} />);
    expect(screen.getByText("See All")).toBeTruthy();
  });

  it("does not render See All when onSeeAll is not provided", () => {
    render(<SectionHeader title="Test" />);
    expect(screen.queryByText("See All")).toBeNull();
  });

  it("calls onSeeAll when See All is pressed", () => {
    const onSeeAll = jest.fn();
    render(<SectionHeader title="Test" onSeeAll={onSeeAll} />);
    fireEvent.press(screen.getByTestId("see-all-button"));
    expect(onSeeAll).toHaveBeenCalledTimes(1);
  });
});

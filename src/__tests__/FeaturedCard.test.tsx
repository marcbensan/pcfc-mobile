import { render, screen } from "@testing-library/react-native";
import React from "react";
import FeaturedCard from "../components/FeaturedCard";

describe("FeaturedCard", () => {
  it("renders the badge text", () => {
    render(<FeaturedCard />);
    expect(screen.getByText("LATEST SERMON")).toBeTruthy();
  });

  it("renders the sermon title", () => {
    render(<FeaturedCard />);
    expect(screen.getByText("Wait and See")).toBeTruthy();
  });

  it("renders the subtitle", () => {
    render(<FeaturedCard />);
    expect(screen.getByText("Pastor Mark Dolor | PCFC")).toBeTruthy();
  });

  it("renders the touchable area", () => {
    render(<FeaturedCard />);
    expect(screen.getByTestId("featured-card")).toBeTruthy();
  });
});

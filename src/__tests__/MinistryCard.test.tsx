import { render, screen } from "@testing-library/react-native";
import React from "react";
import MinistryCard from "../components/MinistryCard";

describe("MinistryCard", () => {
  it("renders the ministry title", () => {
    render(<MinistryCard title="Youth Ministry" photo={1} />);
    expect(screen.getByText("Youth Ministry")).toBeTruthy();
  });
});

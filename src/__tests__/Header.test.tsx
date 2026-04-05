import { render } from "@testing-library/react-native";
import React from "react";
import Header from "../components/Header";

describe("Header", () => {
  it("renders without crashing", () => {
    const { toJSON } = render(<Header />);
    expect(toJSON()).toBeTruthy();
  });
});

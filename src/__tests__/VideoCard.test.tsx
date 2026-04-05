import { render, screen } from "@testing-library/react-native";
import React from "react";
import VideoCard from "../components/VideoCard";

describe("VideoCard", () => {
  it("renders the title", () => {
    render(<VideoCard image={1} title="Vision Sunday" />);
    expect(screen.getByText("Vision Sunday")).toBeTruthy();
  });

  it("truncates long titles to 2 lines", () => {
    render(
      <VideoCard
        image={1}
        title="A Very Long Sermon Title That Should Be Truncated"
      />,
    );
    const text = screen.getByText(
      "A Very Long Sermon Title That Should Be Truncated",
    );
    expect(text.props.numberOfLines).toBe(2);
  });
});

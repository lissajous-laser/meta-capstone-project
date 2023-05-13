import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "../components/Hero";

describe("Hero", () => {
  it("Renders 'Little Lemon' in the Hero", () => {
    render(<BrowserRouter><Hero/></BrowserRouter>)
    const heading = screen.getByText("Little Lemon");
  
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });
})

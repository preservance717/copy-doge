import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CopyDogeContainer from "../containers/CopyDogeContainer";

describe("test CopyDogeContainer", () => {
  it("should display copied text", () => {
    render(<CopyDogeContainer />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "Hello, Doge");
    const paragraph = screen.getByText("Hello, Doge");
    expect(paragraph).toBeInTheDocument();
  })

  
})
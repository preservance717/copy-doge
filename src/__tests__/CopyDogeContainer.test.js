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

  it("should remove copied text after adding tape", async () => {
    render(<CopyDogeContainer />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "Hello, Doge");

    const image = screen.getByAltText("copydoge");
    userEvent.click(image);

    await waitFor(() => {
      const paragraph = screen.queryByText("Hello, Doge");
      expect(paragraph).toBeNull();
    })
  })

  it("should display copied text after removing tape", async () => {
    render(<CopyDogeContainer />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "Hello, Doge");

    const image = screen.getByAltText("copydoge");
    userEvent.click(image);

    const quietImage = await screen.findByAltText("quietdoge");
    userEvent.click(quietImage);

    const paragraph = await screen.findByText("Hello, Doge");
    expect(paragraph).toBeInTheDocument();
  })
})
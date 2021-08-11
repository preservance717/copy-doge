import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import CopyDoge from "../components/CopyDoge";

describe("test CopyDoge Component", () => {
  it("should display name", () => {
    render(<CopyDoge 
      name="Mark"
      value=""
      handleChange={() => {}}
      toggleTape={() => {}}
      isCopying={true}
    />)
    const header = screen.getByText("Copy Cat Mark");
    expect(header).toBeInTheDocument();
  })

  it("should display input text in paragraph when isCopying is set to true", ()=> {
    render(<CopyDoge 
      name=""
      value="Hello, Doge"
      handleChange={() => {}}
      toggleTape={() => {}}
      isCopying={true}
    />)

    const input = screen.getByRole("textbox");
    expect(input).toHaveDisplayValue("Hello, Doge");

    const paragraph = screen.getByText("Hello, Doge");
    expect(paragraph).toBeInTheDocument();
  })
})
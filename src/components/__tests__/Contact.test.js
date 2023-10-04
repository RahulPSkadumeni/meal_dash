import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact as component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
  // expect(heading.length).toBeGreaterThan(0);
});

test("should load button inside component", () => {
  //by role
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  // expect(heading.length).toBeGreaterThan(0);
});

test("should text matches inside component", () => {
  //by text
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
  // expect(heading.length).toBeGreaterThan(0);
});

test("should text matches for place holder", () => {
  render(<Contact />);
  const inputName = screen.getByPlaceholderText("Name");
  expect(inputName).toBeInTheDocument();
  // expect(heading.length).toBeGreaterThan(0);
});

//!! role of input box is "textbox"
test("should should load 2 input boxes", () => {
  render(<Contact />);
  //Querying
  const inputBoxes = screen.getAllByRole("textbox");
  //assertion
  expect(inputBoxes.length).toBe(2);
});

//instead of test you can wite it

it("should should load 2 input boxes", () => {
  render(<Contact />);
  //Querying
  const inputBoxes = screen.getAllByRole("textbox");
  //assertion
  expect(inputBoxes.length).toBe(2);
});

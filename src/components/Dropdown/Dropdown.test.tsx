import { fireEvent, render, screen } from "@testing-library/react";

import { Dropdown } from ".";

const handleClick = jest.fn();

const optionList = [
  {
    label: "Sort by year in descending order.",
    value: "year-desc",
  },
  {
    label: "Sort by year in ascending order.",
    value: "year-asc",
  },
];

describe("Dropdown", () => {
  test("it render header ", () => {
    render(<Dropdown selected="Sort By" onChange={() => {}} optionsList={optionList} />);

    const dropdownHeader = screen.getByText("Sort By");

    expect(dropdownHeader).toBeInTheDocument();
  });

  test("it render icon ", () => {
    render(<Dropdown selected="Sort By" onChange={() => {}} optionsList={optionList} />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
  });

  test("it render button ", () => {
    render(<Dropdown selected="Sort By" onChange={() => {}} optionsList={optionList} />);

    const headerTitle = screen.getByTestId("dd-header");

    fireEvent.click(headerTitle);

    const listItem = screen.getByText("Sort by year in descending order.");

    expect(listItem).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";

import { Dropdown } from ".";

const handleClick = jest.fn();

const optionList = [
  {
    title: "Sort by year in descending order.",
    cb: () => {
      handleClick();
    },
  },
  {
    title: "Sort by year in ascending order.",
    cb: () => {
      handleClick();
    },
  },
];

describe("Dropdown", () => {
  test("it render header ", () => {
    render(<Dropdown optionsList={optionList} />);

    const dropdownHeader = screen.getByText("Sort By");

    expect(dropdownHeader).toBeInTheDocument();
  });

  test("it render list when click header ", () => {
    render(<Dropdown optionsList={optionList} />);

    const dropdownHeader = screen.getByText("Sort By");

    fireEvent.click(dropdownHeader);

    const dropdownListItem1 = screen.getByText(
      "Sort by year in descending order."
    );

    const dropdownListItem2 = screen.getByText(
      "Sort by year in ascending order."
    );

    expect(dropdownListItem1).toBeInTheDocument();
    expect(dropdownListItem2).toBeInTheDocument();
  });

  test("it render list when click header ", () => {
    render(<Dropdown optionsList={optionList} />);

    const dropdownHeader = screen.getByText("Sort By");

    fireEvent.click(dropdownHeader);

    const dropdownListItem1 = screen.getByText(
      "Sort by year in descending order."
    );

    fireEvent.click(dropdownListItem1);

    expect(handleClick).toHaveBeenCalled();
  });
});

import { fireEvent, render, screen } from "@testing-library/react";

import { Search } from ".";

describe("Search", () => {
  test("it render input ", () => {
    render(<Search onClick={() => {}} />);

    const input = screen.getByPlaceholderText("Search");

    expect(input).toBeInTheDocument();
  });

  test("it render icon ", () => {
    render(<Search onClick={() => {}} />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
  });

  test("it render clickable button ", () => {
    const handleClick = jest.fn();

    render(<Search onClick={handleClick} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

import { render, screen } from "@testing-library/react";

import { Search } from ".";

describe("Search", () => {
  test("it render input ", () => {
    render(<Search />);

    const input = screen.getByPlaceholderText("Search");

    expect(input).toBeInTheDocument();
  });

  test("it render icon ", () => {
    render(<Search />);

    const icon = screen.getByTestId("icon");

    expect(icon).toBeInTheDocument();
  });
});

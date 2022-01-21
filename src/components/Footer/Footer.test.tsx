import { render, screen } from "@testing-library/react";

import { Footer } from ".";

describe("Footer", () => {
  test("it render links ", () => {
    render(<Footer />);

    const links = screen.getAllByRole("link");

    expect(links.length).toEqual(6);
  });

  test("it render Images ", () => {
    render(<Footer />);

    const images = screen.getAllByText("Next image stub");

    expect(images.length).toEqual(6);
  });
});

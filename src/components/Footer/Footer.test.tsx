import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("test demo", () => {
  test("test", () => {
    render(<Footer />);

    const footerText = screen.getByText("Footer");

    expect(footerText).toBeTruthy();
  });
});

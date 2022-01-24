import { render, screen } from "@testing-library/react";

import { TextButton } from ".";

describe("TextButton", () => {
  test("it render text ", () => {
    render(<TextButton text="test" />);

    const buttonText = screen.getByText("test");

    expect(buttonText).toHaveTextContent("test");
  });

  test("it render text color ", () => {
    render(<TextButton className="text-black" text="styled text button" />);

    const styledTextButton = screen.getByText("styled text button");

    expect(styledTextButton).toHaveClass("text-black");
  });
});

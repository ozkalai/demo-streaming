import { render, screen } from "@testing-library/react";

import { Button } from "@/components";

describe("Button", () => {
  test("it render", () => {
    render(<Button className="p-2 bg-black text-white" text="Start your free trial" />);

    const button = screen.getByText("Start your free trial");

    expect(button).toBeTruthy();
  });

  test("it render with classNames", () => {
    render(<Button className="p-2 bg-black text-white" text="Start your free trial" />);

    const button = screen.getByText("Start your free trial");

    expect(button).toHaveClass("p-2 bg-black text-white");
  });
});

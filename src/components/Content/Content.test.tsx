import { render, screen } from "@testing-library/react";

import { Content } from ".";

describe("Content", () => {
  test("it render children ", () => {
    render(
      <Content>
        <div>children</div>
      </Content>
    );

    const children = screen.getByText("children");

    expect(children).toBeInTheDocument();
  });
});

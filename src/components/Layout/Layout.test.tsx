import { render, screen } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { createMockRouter } from "../../../__mocks__/createMockRouter";
import { Layout } from ".";

describe("Layout", () => {
  test("it render Header component", () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({
          query: {
            id: "1",
          },
        })}
      >
        <Layout />
      </RouterContext.Provider>
    );

    const headerComponent = screen.getByText("DEMO Streaming");

    expect(headerComponent).toBeInTheDocument();
  });

  test("it render Footer component", () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({
          query: {
            id: "1",
          },
        })}
      >
        <Layout />
      </RouterContext.Provider>
    );

    const footerComponent = screen.getByTestId("footer-test-id");

    expect(footerComponent).toBeInTheDocument();
  });
});

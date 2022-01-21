import { render, screen } from "@testing-library/react";
import { createMockRouter } from "../../../__mocks__/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

import { Header } from "@/components/Header";

describe("Header", () => {
  test("it render header title", () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({
          query: {
            id: "1",
          },
        })}
      >
        <Header />
      </RouterContext.Provider>
    );
    const headerMainTitle = screen.getByText("DEMO Streaming");

    expect(headerMainTitle).toBeTruthy();
  });
});

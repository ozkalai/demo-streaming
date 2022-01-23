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

  test("it render TextButton", () => {
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
    const textButton = screen.getByText("Log In");

    expect(textButton).toBeInTheDocument();
  });

  test("it render Button", () => {
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
    const button = screen.getByText("Start your free trial");

    expect(button).toBeTruthy();
  });

  test("it update headerTitle state with pathname", () => {
    render(
      <RouterContext.Provider
        value={createMockRouter({
          query: {
            id: "1",
          },
          pathname: "/movies",
        })}
      >
        <Header />
      </RouterContext.Provider>
    );
    const headerTitleFromPathname = screen.getByText("Popular Movies");

    expect(headerTitleFromPathname).toBeTruthy();
  });
});

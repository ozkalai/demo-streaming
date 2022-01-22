import { render, screen } from "@testing-library/react";

import { PopularTitleCard } from ".";

describe("PopulerTitleCard", () => {
  test("it render title according to type ", () => {
    render(<PopularTitleCard type="Movies" />);

    const cardType = screen.getByText(/MOVIES/);

    expect(cardType).toBeInTheDocument();
  });

  test("it render Images ", () => {
    render(<PopularTitleCard type="Series" />);

    const cardImage = screen.getByText("Next image stub");

    expect(cardImage).toBeInTheDocument();
  });
});

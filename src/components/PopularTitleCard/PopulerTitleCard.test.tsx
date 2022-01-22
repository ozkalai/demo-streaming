import { fireEvent, render, screen } from "@testing-library/react";

import { PopularTitleCard } from ".";

describe("PopulerTitleCard", () => {
  test("it render title according to type ", () => {
    render(<PopularTitleCard onClick={() => {}} type="Movies" />);

    const cardType = screen.getByText(/MOVIES/);

    expect(cardType).toBeInTheDocument();
  });

  test("it render Images ", () => {
    render(<PopularTitleCard onClick={() => {}} type="Series" />);

    const cardImage = screen.getByText("Next image stub");

    expect(cardImage).toBeInTheDocument();
  });

  test("it clickable ", () => {
    const handleClick = jest.fn();

    render(<PopularTitleCard onClick={handleClick} type="Series" />);

    const clickableCard = screen.getByTestId("clickable-card");

    fireEvent.click(clickableCard);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

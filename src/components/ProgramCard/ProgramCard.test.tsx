import { render, screen } from "@testing-library/react";

import { ProgramCard } from ".";

const programData = {
  title: "Roadies",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  programType: "series",
  images: {
    "Poster Art": {
      url: "https://streamcoimg-a.akamaihd.net/000/132/42/13242-PosterArt-dfd9c3a0fa5db6e2e38b62e7fedcaf47.jpg",
      width: 1000,
      height: 1500,
    },
  },
  releaseYear: 2016,
};

describe("ProgramCard", () => {
  test("it render program title ", () => {
    render(<ProgramCard programData={programData} />);

    const programTitle = screen.getByText(/Roadies/);

    expect(programTitle).toBeInTheDocument();
  });

  test("it render image ", () => {
    render(<ProgramCard programData={programData} />);

    const programImage = screen.getByText("Next image stub");

    expect(programImage).toBeInTheDocument();
  });
});

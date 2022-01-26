const posterArt = "Poster Art";

export interface IProgramData {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": IPosterArt;
  };
  releaseYear: number;
  id: number;
}

export interface IPosterArt {
  url: string;
  width: number;
  height: number;
}

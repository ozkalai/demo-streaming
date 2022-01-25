import { IProgramData } from "./ProgramData";

export interface IPageProp {
  type: "movies" | "series";
  data: IProgramData[];
}

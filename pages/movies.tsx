import type { NextPage } from "next";
import { useQuery } from "react-query";

import { Content } from "@/components/Content";
import styles from "@/styles/pages/Movies.module.scss";
import { Search } from "@/components/Search";
import { Dropdown } from "@/components/Dropdown";
import { ProgramList } from "@/components/ProgramList";

const Movies: NextPage = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("./sample.json")
      .then((res) => res.json())
      .then((data) => data.entries)
  );

  const optionList = [
    {
      title: "Sort by year in descending order.",
      cb: () => {
        console.log("clicked first item");
      },
    },
    {
      title: "Sort by year in ascending order.",
      cb: () => {
        alert("clicked second item");
      },
    },
    {
      title: "Sort by title in descending order.",
      cb: () => {
        console.log("clicked third item");
      },
    },
    {
      title: "Sort by title in ascending order.",
      cb: () => {
        console.log("clicked forth item");
      },
    },
  ];

  return (
    <Content>
      <main className={styles.movies}>
        <div className="grid grid-cols-7 gap-4">
          <div className="col-start-1 col-span-3 ...">
            <Search onClick={() => {}} />
          </div>
          <div className="col-start-4 col-span-2"></div>
          <div className="col-start-6 col-span-2">
            <Dropdown optionsList={optionList} />
          </div>
        </div>
        {error ? "Oops, something went wrong" : ""}
        {isLoading ? "Loading" : <ProgramList data={data} />}
      </main>
    </Content>
  );
};

export default Movies;

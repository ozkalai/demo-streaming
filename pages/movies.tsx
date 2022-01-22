import type { NextPage } from "next";
import { useQuery } from "react-query";

import { Content } from "@/components/Content";
import { ProgramCard } from "@/components/ProgramCard";
import { IProgramData } from "@/interfaces/ProgramData";
import styles from "@/styles/pages/Movies.module.scss";
import { Search } from "@/components/Search";

const Movies: NextPage = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("./sample.json")
      .then((res) => res.json())
      .then((data) => data.entries)
  );

  return (
    <Content>
      <main className={styles.movies}>
        <Search />
        <br></br>
        {error ? "Oops, something went wrong" : ""}
        {isLoading ? (
          "Loading"
        ) : (
          <ul className={styles.moviesList}>
            {data?.map((p: IProgramData) => (
              <ProgramCard programData={p} key={p.title} />
            ))}
          </ul>
        )}
      </main>
    </Content>
  );
};

export default Movies;

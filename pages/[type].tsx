import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { useQuery } from "react-query";

import { Content } from "@/components/Content";
import { Search } from "@/components/Search";
import { Dropdown } from "@/components/Dropdown";
import { IProgramData } from "@/interfaces/ProgramData";
import styles from "@/styles/pages/Type.module.scss";
import { ProgramList } from "@/components/ProgramList";
import { optionList } from "src/constants/optionList";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryType = ctx.query.type;
  return {
    props: {
      type: queryType === "movies" ? "movie" : queryType,
    },
    notFound: queryType !== "series" && queryType !== "movies",
  };
};

const Series: NextPage<{ type: "movie" | "series" }> = ({ type }) => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("title-desc");

  const { isLoading, error, data } = useQuery(["series-data", sort, query, type], async () => {
    const raw = await fetch("./sample.json");
    const json = await raw.json();
    const filtered = json.entries.filter(
      (e: IProgramData) =>
        e.programType === type &&
        e.releaseYear >= 2010 &&
        e.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
    const sorted = filtered.sort((a: IProgramData, b: IProgramData) => {
      switch (sort) {
        case "title-asc":
          return b.title.localeCompare(a.title);
        case "year-asc":
          return a.releaseYear - b.releaseYear;
        case "year-desc":
          return b.releaseYear - a.releaseYear;
        case "title-desc":
        default:
          return a.title.localeCompare(b.title);
      }
    });
    return sorted.slice(0, 21);
  });

  return (
    <Content>
      <div className={styles.program}>
        <div className={styles.programSearch}>
          <Search
            onClick={(value) => {
              setQuery(value);
            }}
          />
        </div>
        <div className={styles.programDropdown}>
          <Dropdown
            onChange={(value) => {
              setSort(value as typeof sort);
            }}
            optionsList={optionList}
            selected={sort}
          />
        </div>
      </div>

      {error ? "Oops, something went wrong" : ""}
      {isLoading ? "Loading" : <ProgramList data={data ?? []} />}
    </Content>
  );
};

export default Series;

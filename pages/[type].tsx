import type { GetServerSideProps, NextPage } from "next";
import { useMemo, useState } from "react";

import { Content, Search, Dropdown, ProgramList } from "@/components";
import { optionList } from "@/constants/optionList";
import styles from "@/styles/pages/Type.module.scss";
import dataFromJson from "../public/sample.json";
import { IPageProp } from "@/interfaces/Page";

const Series: NextPage<IPageProp> = ({ type, data }) => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("title-desc");

  const filtered = useMemo(() => {
    return data
      .sort((a, b) => {
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
      })
      .filter((p) => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      .slice(0, 21);
  }, [sort, query, data]);

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
      {filtered ? <ProgramList data={filtered} /> : "Loading..."}
    </Content>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryType = ctx.query.type;

  const type = queryType === "movies" ? "movie" : queryType;

  const data = dataFromJson.entries.map((p, idx) => ({ ...p, id: idx }));

  const entries = data.filter((p) => p.programType === type && p.releaseYear >= 2010);

  return {
    props: {
      type,
      data: entries,
    },
    notFound: queryType !== "series" && queryType !== "movies",
  };
};

export default Series;

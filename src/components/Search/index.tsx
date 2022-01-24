import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { ISearchProps } from "@/interfaces/Search";
import styles from "./Search.module.scss";

export const Search: React.FC<ISearchProps> = ({ onClick }): JSX.Element => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <input onChange={(e) => setQuery(e.target.value)} value={query} placeholder="Search" />
      </div>
      <button
        onClick={() => {
          onClick(query);
        }}
        className={styles.searchButton}
      >
        <FaSearch data-testid="icon" />
      </button>
    </div>
  );
};

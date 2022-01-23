import { FaSearch } from "react-icons/fa";

import { ISearchProps } from "@/interfaces/Search";
import styles from "./Search.module.scss";

export const Search: React.FC<ISearchProps> = ({ onClick }): JSX.Element => {
  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <input placeholder="Search" />
      </div>
      <button onClick={onClick} className={styles.searchButton}>
        <FaSearch data-testid="icon" />
      </button>
    </div>
  );
};

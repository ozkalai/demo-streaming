import { FaSearch } from "react-icons/fa";

import styles from "./Search.module.scss";

export const Search: React.FC = (): JSX.Element => {
  return (
    <div className={styles.search}>
      <div className={styles.searchInput}>
        <input placeholder="Search" />
      </div>
      <button
        onClick={() => {
          console.log("clicked");
        }}
        className={styles.searchButton}
      >
        <FaSearch data-testid="icon" />
      </button>
    </div>
  );
};

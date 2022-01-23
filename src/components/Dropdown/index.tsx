import { useState } from "react";
import { FaSortDown } from "react-icons/fa";

import { IDropdownProps } from "@/interfaces/Dropdown";
import styles from "./Dropdown.module.scss";

export const Dropdown: React.FC<IDropdownProps> = ({
  optionsList,
}): JSX.Element => {
  const [headerTitle, setHeaderTitle] = useState("Sort By");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles.dropdownHeader}
      >
        <div className={styles.dropdownHeaderTitle}>{headerTitle}</div>
        <FaSortDown className={styles.dropdownHeaderIcon} />
      </div>
      {isOpen && (
        <div className={styles.dropdownList}>
          {optionsList.map((o, i) => (
            <div className={styles.dropdownListItem} key={i + 1}>
              <button
                onClick={() => {
                  setHeaderTitle(o.title);
                  setIsOpen(false);
                  o.cb();
                }}
                className={styles.dropdownListItemButton}
              >
                {o.title}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

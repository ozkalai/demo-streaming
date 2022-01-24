import { useState } from "react";
import { FaSortDown } from "react-icons/fa";

import { IDropdownProps } from "@/interfaces/Dropdown";
import styles from "./Dropdown.module.scss";

export const Dropdown: React.FC<IDropdownProps> = ({ optionsList, onChange, selected }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles.dropdownHeader}
        data-testid="dd-header"
      >
        <div className={styles.dropdownHeaderTitle}>
          {optionsList.find((e) => {
            return e.value === selected;
          })?.label ?? "Sort By"}
        </div>
        <FaSortDown data-testid="icon" className={styles.dropdownHeaderIcon} />
      </div>
      {isOpen && (
        <div className={styles.dropdownList}>
          {optionsList.map((o, i) => (
            <div className={styles.dropdownListItem} key={i}>
              <button
                onClick={() => {
                  onChange(o.value);
                  setIsOpen(false);
                }}
                className={styles.dropdownListItemButton}
              >
                {o.label}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

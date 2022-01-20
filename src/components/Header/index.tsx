import { TextButton } from "../TextButton";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <TextButton text="Log In" className="text-white" />
    </div>
  );
};

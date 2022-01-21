import { useRouter } from "next/router";

import { Button } from "@/components/Button";
import { TextButton } from "@/components/TextButton";

import styles from "./Header.module.scss";
import { useEffect, useState } from "react";

export const Header: React.FC = (): JSX.Element => {
  const { pathname } = useRouter();

  const [headerTitle, setHeaderTitle] = useState("Popular Titles");

  const getHeaderTitle = (pathname: string) => {
    switch (pathname) {
      case "/movies":
        return "Popular Movies";
        break;
      case "/series":
        return "Popular Series";
        break;
      default:
        return "Popular Title";
        break;
    }
  };

  useEffect(() => {
    setHeaderTitle(getHeaderTitle(pathname));
  }, []);

  return (
    <div data-test-id="header-test" className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.headerMainContent}>
          <h1 className={styles.headerMainContentName}>DEMO Streaming</h1>
          <div className={styles.headerMainContentButtons}>
            <TextButton className="text-white" text="Log In" />
            <Button
              className="text-white p-2 bg-gray"
              text="Start your free trial"
            />
          </div>
        </div>
      </div>
      <div className={styles.headerTitle}>
        <div className={styles.headerTitleContent}>{headerTitle}</div>
      </div>
    </div>
  );
};

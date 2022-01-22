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
        return "Popular Titles";
        break;
    }
  };

  useEffect(() => {
    setHeaderTitle(getHeaderTitle(pathname));
  }, []);

  return (
    <header data-test-id="header-test" className={styles.header}>
      <div className={styles.headerMain}>
        <div className={styles.headerMainContent}>
          <h1 className={styles.headerMainContentName}>DEMO Streaming</h1>
          <div className={styles.headerMainContentButtons}>
            <TextButton
              className="text-white text-[12px]  md:text-sm"
              text="Log In"
            />
            <Button
              className="text-white text-[12px]  md:text-sm p-[1px_5px_1px_2px]   md:p-[5px_25px_5px_10px] bg-gray"
              text="Start your free trial"
            />
          </div>
        </div>
      </div>
      <div className={styles.headerTitle}>
        <div className={styles.headerTitleContent}>{headerTitle}</div>
      </div>
    </header>
  );
};

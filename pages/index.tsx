import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import styles from "@/styles/pages/Home.module.scss";
import { PopularTitleCard } from "@/components/PopularTitleCard";
import { Content } from "@/components/Content";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Content>
      <main className={styles.main}>
        <PopularTitleCard
          onClick={() => {
            router.push("/movies");
          }}
          type="Movies"
        />
        <PopularTitleCard
          onClick={() => {
            router.push("/series");
          }}
          type="Series"
        />
      </main>
    </Content>
  );
};

export default Home;

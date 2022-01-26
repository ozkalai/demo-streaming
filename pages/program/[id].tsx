import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import styles from "@/styles/pages/Home.module.scss";
import { Content } from "@/components";
import dataFromJson from "../../public/sample.json";
import { IProgramData } from "@/interfaces/ProgramData";
import { useEffect, useState } from "react";

const Home: NextPage<{ program: IProgramData }> = ({ program }) => {
  const { asPath } = useRouter();

  console.log("PROGRAM", program);

  return (
    <Content>
      <main className={styles.main}>
        <h1>{program.title}</h1>
      </main>
    </Content>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const data = dataFromJson.entries.map((p, idx) => ({ ...p, id: idx }));
  const id = Number(ctx.query.id);

  const program = isNaN(id) ? undefined : dataFromJson.entries[id];
  return {
    props: {
      program,
    },
    notFound: !program || isNaN(id),
  };
};

export default Home;

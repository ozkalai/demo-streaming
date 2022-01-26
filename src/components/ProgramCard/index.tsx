import Image from "next/image";
import Link from "next/link";

import { IProgramCard } from "@/interfaces/ProgramCard";
import styles from "./ProgramCard.module.scss";

export const ProgramCard: React.FC<IProgramCard> = ({ programData }): JSX.Element => {
  return (
    <Link passHref href={`/program/${programData.id}`}>
      <div className={styles.programCard}>
        <div className={styles.programCardImage}>
          <Image
            width={130}
            height={201}
            layout="responsive"
            src={programData.images["Poster Art"].url}
            alt="Program Image"
          />
        </div>
        <div className={styles.programCardTitle}>{programData.title}</div>
      </div>
    </Link>
  );
};

import Image from "next/image";

import { IProgramCard } from "@/interfaces/ProgramCard";
import styles from "./ProgramCard.module.scss";

export const ProgramCard: React.FC<IProgramCard> = ({
  programData,
}): JSX.Element => {
  return (
    <div className={styles.programCard}>
      <div className={styles.programCardImage}>
        <Image
          layout="fill"
          src={programData.images["Poster Art"].url}
          alt="Program Image"
        />
      </div>
      <div className={styles.programCardTitle}>{programData.title}</div>
    </div>
  );
};

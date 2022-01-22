import Image from "next/image";

import placeholder from "@/assets/placeholder.png";
import { IPopularTitleCardProps } from "@/interfaces/PopularTitleCardProps";
import styles from "./PopularTitleCard.module.scss";

export const PopularTitleCard: React.FC<IPopularTitleCardProps> = ({
  type,
  onClick,
}) => {
  return (
    <div
      data-testid="clickable-card"
      onClick={onClick}
      className={styles.wrapper}
    >
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image src={placeholder} alt="placeholder" layout="fixed" />
        </div>
        <span className={styles.cardType}>{type.toUpperCase()}</span>
      </div>
      <div className={styles.cardTitle}>Popular {type}</div>
    </div>
  );
};

import { IProgramListProps } from "@/interfaces/ProgramListProps";
import { ProgramCard } from "../ProgramCard";
import styles from "./ProgramList.module.scss";

export const ProgramList: React.FC<IProgramListProps> = ({ data }): JSX.Element => {
  return (
    <div className={styles.programList}>
      {data.map((p) => (
        <ProgramCard data-testid="program-card-test-id" key={p.title} programData={p} />
      ))}
    </div>
  );
};

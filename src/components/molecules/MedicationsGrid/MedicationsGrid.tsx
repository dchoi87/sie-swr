import classNames from "classnames";

import { Icon } from "@/components/atoms";

import styles from "./MedicationsGrid.module.scss";

export type Medication = {
  title: string;
  subtext?: string;
  type: string;
};

export interface MedicationsGridProps {
  data: Medication[];
}

const MedicationsGrid = ({ data }: MedicationsGridProps) => (
  <div className={styles.container}>
    {data.map((med, i) => {
      return (
        <div key={`li-${i}`} className={styles.listItem}>
          <Icon
            iconName={med.type === "oral" ? "Prescription" : "Eyedropper"}
          />
          <div className={styles.copy}>
            <div className={styles.title}>{med.title}</div>
            <div className={styles.subtext}>{med.subtext}</div>
          </div>
        </div>
      );
    })}
  </div>
);

export default MedicationsGrid;

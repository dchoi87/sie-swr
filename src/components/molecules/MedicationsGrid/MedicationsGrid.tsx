import { type SelectionOption } from "@/mocks/patientHistory";

import { Icon } from "@/components/atoms";
import { Header } from "@/components/molecules";

import styles from "./MedicationsGrid.module.scss";

export interface MedicationsGridProps {
  items: SelectionOption[];
  heading: string;
  directions?: string;
}

const MedicationsGrid = ({
  heading,
  directions,
  items,
}: MedicationsGridProps) => (
  <div className={styles.container}>
    <Header
      title={heading}
      subtext={directions}
      size="medium"
      separator={true}
    />
    <div className={styles.grid}>
      {items.map((med, i) => {
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
  </div>
);

export default MedicationsGrid;

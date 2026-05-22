import classNames from "classnames";

import { Icon } from "@/components/atoms";

import styles from "./MedicationsGrid.module.scss";

export interface MedicationsGridProps {}

const MedicationsGrid = ({}: MedicationsGridProps) => (
  <div className={styles.container}>
    {[...Array(10)].map((_el, i) => {
      return (
        <div key={`li-${i}`} className={styles.listItem}>
          <Icon iconName={i > 2 ? "Prescription" : "Eyedropper"} />
          <div className={styles.copy}>
            <div className={styles.title}>Loremipsumdolorsitametzine 6mg</div>
            <div className={styles.subtext}>Lorem ipsum dolor sit amet</div>
          </div>
        </div>
      );
    })}
  </div>
);

export default MedicationsGrid;

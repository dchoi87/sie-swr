import classNames from "classnames";

import styles from "./MedicationsGrid.module.scss";

export interface MedicationsGridProps {}

const MedicationsGrid = ({}: MedicationsGridProps) => (
  <div className={styles.container}>Medications Grid</div>
);

export default MedicationsGrid;

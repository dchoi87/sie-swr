import styles from "./MedicationHistory.module.scss";

import { Dialogue, Header, MedicationsGrid } from "@/components/molecules";

export interface MedicationHistoryProps {}

const MedicationHistory = ({}: MedicationHistoryProps) => {
  return (
    <Dialogue navigation="confirmation">
      <div className={styles.container}>
        <Header
          title="Medication History"
          subtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          size="medium"
          separator={true}
        />
        <MedicationsGrid />
      </div>
    </Dialogue>
  );
};

export default MedicationHistory;

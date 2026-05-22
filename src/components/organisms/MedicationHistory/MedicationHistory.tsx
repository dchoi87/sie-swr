import styles from "./MedicationHistory.module.scss";

import { Dialogue, Header, MedicationsGrid } from "@/components/molecules";

export interface MedicationHistoryProps {}

const MedicationHistory = ({}: MedicationHistoryProps) => {
  return (
    <Dialogue navigation="confirmation">
      <div className={styles.container}>
        <Header
          title="Are These Medications Up to Date?"
          subtext="Please review your current medications below and confirm they are correct"
          size="medium"
          separator={true}
        />
        <MedicationsGrid />
      </div>
    </Dialogue>
  );
};

export default MedicationHistory;

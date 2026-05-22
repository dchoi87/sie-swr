import styles from "./TopicalMedication.module.scss";

import { Dialogue, Header, MedicationsGrid } from "@/components/molecules";
import { type MedicationsGridProps } from "@/components/molecules/MedicationsGrid/MedicationsGrid";

const TopicalMedication = ({ data }: MedicationsGridProps) => {
  return (
    <Dialogue navigation="confirmation">
      <div className={styles.container}>
        <Header
          title="Are These Topical Medications Up to Date?"
          subtext="Please review your current medications below and confirm they are correct"
          size="medium"
          separator={true}
        />
        <MedicationsGrid data={data} />
      </div>
    </Dialogue>
  );
};

export default TopicalMedication;

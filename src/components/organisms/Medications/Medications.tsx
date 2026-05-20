import styles from "./Medications.module.scss";

import { Icon } from "@/components/atoms";
import { Dialogue } from "@/components/molecules";

export interface MedicationsProps {}

const Medications = ({}: MedicationsProps) => {
  return (
    <Dialogue
      width="800px"
      navigation="confirmation"
      dots={2}
      alignment="flex-start"
    >
      <div className={styles.container}>
        <div className={styles.copy}>
          <div className={styles.title}>Medication History</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className={styles.grid}>
          {[...Array(10)].map((_el, i) => {
            return (
              <div key={`li-${i}`} className={styles.listItem}>
                <Icon iconName={i > 2 ? "Prescription" : "Eyedropper"} />
                <div className={styles.medication}>
                  <div className={styles.title}>
                    Loremipsumdolorsitametzine 6mg
                  </div>
                  <div className={styles.description}>
                    Lorem ipsum dolor sit amet
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Dialogue>
  );
};

export default Medications;

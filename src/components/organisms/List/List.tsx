import styles from "./List.module.scss";

import { Icon } from "@/components/atoms";
import { Dialogue } from "@/components/molecules";

export interface ListProps {}

const List = ({}: ListProps) => {
  return (
    <Dialogue width="1000px" navigation="confirmation" dots={2}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <div className={styles.title}>Medication History</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className={styles.grid}>
          {[...Array(15)].map((_el, i) => {
            return (
              <div key={`li-${i}`} className={styles.listItem}>
                <Icon iconName={i > 1 ? "Prescription" : "Eyedropper"} />
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

export default List;

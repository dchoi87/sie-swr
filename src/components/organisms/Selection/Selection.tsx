import styles from "./Selection.module.scss";

import { Icon } from "@/components/atoms";

export interface SelectionProps {
  title?: string;
  description?: string;
}

const Selection = ({ title, description }: SelectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.copy}>
        {title && <div className={styles.title}>{title}</div>}
        {description && <div className={styles.description}>{description}</div>}
      </div>
      <div className={styles.grid}>
        {[...Array(6)].map((_el, i) => {
          return (
            <div key={`sel-${i}`} className={styles.card}>
              <div className={styles.title}>
                <Icon iconName="Prescription" size="16" />
                <span>Lorem Ipsum</span>
              </div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Selection;

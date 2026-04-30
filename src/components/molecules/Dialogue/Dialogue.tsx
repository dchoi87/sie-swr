import { Button } from "@/components/atoms";

import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  title?: string;
  description?: string;
  dots?: number;
}

const Dialogue = ({ title, description, dots }: DialogueProps) => (
  <div className={styles.container}>
    <div className={styles.copy}>
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
    </div>
    <div className={styles.cta}>
      <Button label="Lorem Ipsum" />
      <Button label="Lorem Ipsum" type="secondary" />
    </div>
    {dots && (
      <div className={styles.dots}>
        {[...Array(dots)].map((_el, i) => {
          return <div key={`dot-${i}`} className={styles.dot}></div>;
        })}
      </div>
    )}
  </div>
);

export default Dialogue;

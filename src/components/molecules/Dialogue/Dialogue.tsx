import { Button } from "@/components/atoms";

import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  title?: string;
}

const Dialogue = ({ title }: DialogueProps) => (
  <div className={styles.container}>
    <div className={styles.copy}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    <div className={styles.cta}>
      <Button label="Lorem Ipsum" />
      <Button label="Lorem Ipsum" type="secondary" />
    </div>
    <div className={styles.dots}>
      {[...Array(5)].map((_el, i) => {
        return <div key={`dot-${i}`} className={styles.dot}></div>;
      })}
    </div>
  </div>
);

export default Dialogue;

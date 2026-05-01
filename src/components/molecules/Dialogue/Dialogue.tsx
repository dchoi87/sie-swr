import classNames from "classnames";

import { Button } from "@/components/atoms";

import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  title?: string;
  description?: string;
  dots?: number;
  navPos?: string;
  navContent?: React.ReactNode;
}

const Dialogue = ({
  title,
  description,
  dots,
  navPos = "inner",
  navContent,
}: DialogueProps) => (
  <div className={styles.container}>
    <div className={styles.copy}>
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
    </div>

    {navContent ? (
      <div className={classNames(styles.nav, styles[navPos])}>{navContent}</div>
    ) : (
      <div className={styles.cta}>
        <Button label="Lorem Ipsum" iconName="ArrowRight" />
      </div>
    )}
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

// TODO:
// 1. Navigation Buttons - Chevrons & YES/NO
// 2. Darker Glass and Contrast Version

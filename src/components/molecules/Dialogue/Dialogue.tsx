import classNames from "classnames";

import { Button } from "@/components/atoms";

import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  title?: string;
  description?: string;
  dots?: number;
  chevron?: boolean;
  chevronPos?: string;
}

const Dialogue = ({
  title,
  description,
  dots,
  chevron = false,
  chevronPos = "inner",
}: DialogueProps) => (
  <div className={styles.container}>
    <div className={styles.copy}>
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
    </div>

    {chevron ? (
      <div className={classNames(styles.chevron, styles[chevronPos])}>
        <Button iconName="ChevronLeft" />
        <Button iconName="ChevronRight" />
      </div>
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

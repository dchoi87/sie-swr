import classNames from "classnames";

import { Button } from "@/components/atoms";

import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  title?: string;
  description?: string;
  dots?: number;
  navPos?: string;
  navContent?: React.ReactNode;
  contrast?: boolean;
}

const Dialogue = ({
  title,
  description,
  dots,
  navPos = "inner",
  navContent,
  contrast,
}: DialogueProps) => (
  <div className={classNames(styles.container, contrast && styles.contrast)}>
    <div className={styles.copy}>
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
    </div>

    {navContent ? (
      <div className={classNames(styles.nav, styles[navPos])}>{navContent}</div>
    ) : (
      <div className={styles.cta}>
        <Button
          label="Lorem Ipsum"
          iconName="ArrowRight"
          type={contrast ? "contrast" : "primary"}
        />
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

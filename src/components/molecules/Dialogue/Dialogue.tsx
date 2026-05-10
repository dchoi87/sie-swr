import classNames from "classnames";

import { Button } from "@/components/atoms";

import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  width?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  cta?: boolean;
  help?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  navigation?: "chevron" | "confirmation";
  dots?: number;
}

const icons = {
  chevron: {
    left: "ChevronLeft",
    right: "ChevronRight",
  },
  confirmation: {
    left: "XLg",
    right: "CheckLg",
  },
} as const;

const Dialogue = ({
  width = "800px",
  children,
  title,
  description,
  cta = false,
  help = false,
  onMouseEnter,
  onMouseLeave,
  navigation,
  dots = 5,
}: DialogueProps) => (
  <div
    className={classNames(styles.container, navigation && styles.navPadding)}
    style={{ width: width }}
  >
    {help && (
      <div className={styles.help}>
        <Button
          iconName="QuestionLg"
          theme="yellow"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
    )}
    {children ? (
      children
    ) : (
      <div className={styles.copy}>
        {title && <div className={styles.title}>{title}</div>}
        {description && <div className={styles.description}>{description}</div>}
      </div>
    )}
    {cta && (
      <div className={styles.cta}>
        <Button label="Lorem Ipsum" iconName="ArrowRight" />
      </div>
    )}
    {navigation && (
      <div className={styles.navigation}>
        <Button
          iconName={icons[navigation].left}
          theme={navigation === "confirmation" ? "red" : "neutral"}
        />
        <div className={styles.dots}>
          {[...Array(dots)].map((_el, i) => {
            return <div key={`dot-${i}`} className={styles.dot}></div>;
          })}
        </div>
        <Button
          iconName={icons[navigation].right}
          theme={navigation === "confirmation" ? "green" : "neutral"}
        />
      </div>
    )}
  </div>
);

export default Dialogue;

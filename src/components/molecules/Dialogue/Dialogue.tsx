import classNames from "classnames";

import { Button } from "@/components/atoms";

import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  width?: string;
  alignment?: "top" | "center" | "bottom";
  children?: React.ReactNode;
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
  alignment = "center",
  children,
  help = false,
  onMouseEnter,
  onMouseLeave,
  navigation,
  dots = 5,
}: DialogueProps) => (
  <div
    className={classNames(
      styles.container,
      navigation && styles.spacing,
      styles[alignment],
    )}
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
    {children && children}
    {navigation && (
      <div className={styles.navigation}>
        <Button
          iconName={icons[navigation].left}
          theme={navigation === "confirmation" ? "red" : "neutral"}
        />
        {navigation === "chevron" && (
          <div className={styles.dots}>
            {[...Array(dots)].map((_el, i) => {
              return <div key={`dot-${i}`} className={styles.dot}></div>;
            })}
          </div>
        )}
        <Button
          iconName={icons[navigation].right}
          theme={navigation === "confirmation" ? "green" : "neutral"}
        />
      </div>
    )}
  </div>
);

export default Dialogue;

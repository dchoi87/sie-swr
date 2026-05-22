import classNames from "classnames";

import { Button } from "@/components/atoms";

import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  width?: string;
  children?: React.ReactNode;
  help?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  navigation?: "chevron" | "confirmation";
  dots?: number;
  noSpacing?: boolean;
}

const Dialogue = ({
  children,
  help = false,
  onMouseEnter,
  onMouseLeave,
  navigation,
  dots = 5,
  noSpacing,
}: DialogueProps) => (
  <div className={classNames(styles.container)}>
    <div
      className={classNames(
        styles.help,
        help && styles.visible,
        noSpacing && styles.hidden,
      )}
    >
      <Button
        iconName="QuestionLg"
        theme="yellow"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
    {children && children}
    <div
      className={classNames(
        styles.navigation,
        navigation && styles.visible,
        noSpacing && styles.hidden,
      )}
    >
      {navigation === "chevron" && (
        <>
          <Button iconName="ChevronLeft" />
          <div className={styles.dots}>
            {[...Array(dots)].map((_el, i) => {
              return <div key={`dot-${i}`} className={styles.dot}></div>;
            })}
          </div>
          <Button iconName="ChevronRight" />
        </>
      )}
      {navigation === "confirmation" && (
        <>
          <Button iconName="XLg" theme="red" />
          <Button iconName="CheckLg" theme="green" />
        </>
      )}
    </div>
  </div>
);

export default Dialogue;

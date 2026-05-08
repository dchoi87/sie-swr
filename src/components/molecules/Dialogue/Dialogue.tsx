import { Button } from "@/components/atoms";
import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  width?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  cta?: boolean;
  help?: boolean;
  navigation?: "chevron" | "confirmation";
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
  navigation,
}: DialogueProps) => (
  <div className={styles.container} style={{ width: width }}>
    {help && (
      <div className={styles.help}>
        <Button iconName="QuestionLg" theme="yellow" />
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
          {[...Array(5)].map((_el, i) => {
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

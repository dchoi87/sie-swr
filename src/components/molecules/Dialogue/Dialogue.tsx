import { Button } from "@/components/atoms";
import { Navigation } from "@/components/molecules";
import type { NavigationType } from "@/components/molecules/Navigation/Navigation";
import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  title?: string;
  description?: string;
  navigation?: boolean;
  navigationType?: NavigationType;
}

const Dialogue = ({
  title,
  description,
  navigation = false,
  navigationType,
}: DialogueProps) => (
  <div className={styles.container}>
    <div className={styles.copy}>
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
    </div>
    {navigation ? (
      <Navigation type={navigationType} />
    ) : (
      <div className={styles.cta}>
        <Button label="Lorem Ipsum" iconName="ArrowRight" />
      </div>
    )}
  </div>
);

export default Dialogue;

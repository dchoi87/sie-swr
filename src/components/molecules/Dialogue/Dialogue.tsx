import classNames from "classnames";

import { Button } from "@/components/atoms";
import { Navigation } from "@/components/molecules";
import type { NavigationType } from "@/components/molecules/Navigation/Navigation";
import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  title?: string;
  description?: string;
  contrast?: boolean;
  navigation?: boolean;
  navigationType?: NavigationType;
}

const Dialogue = ({
  title,
  description,
  contrast,
  navigation = false,
  navigationType,
}: DialogueProps) => (
  <div className={classNames(styles.container, contrast && styles.contrast)}>
    <div className={styles.copy}>
      {title && <div className={styles.title}>{title}</div>}
      {description && <div className={styles.description}>{description}</div>}
    </div>
    {navigation ? (
      <Navigation contrast={contrast} type={navigationType} />
    ) : (
      <div className={styles.cta}>
        <Button
          label="Lorem Ipsum"
          iconName="ArrowRight"
          type={contrast ? "contrast" : "primary"}
        />
      </div>
    )}
  </div>
);

export default Dialogue;

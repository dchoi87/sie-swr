import { useRef, useState } from "react";
import classNames from "classnames";

import { ContentBlock, Dialogue, HelpPanel } from "@/components/molecules";

import styles from "./Information.module.scss";

export interface InformationProps {}

const HELP_DELAY = 2200;

const Information = ({}: InformationProps) => {
  const [helpVisible, setHelpVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleHelpMouseEnter = () => {
    if (helpVisible) return;
    timerRef.current = setTimeout(() => {
      setHelpVisible(true);
      timerRef.current = null;
    }, HELP_DELAY);
  };

  const handleHelpMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handlePanelMouseLeave = () => {
    setHelpVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={classNames(styles.inner, helpVisible && styles.helpVisible)}>
        <Dialogue
          navigation="chevron"
          help
          onMouseEnter={handleHelpMouseEnter}
          onMouseLeave={handleHelpMouseLeave}
        >
          <ContentBlock
            title="Lorem Ipsum Dolor Sit"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </Dialogue>
        <div
          className={classNames(styles.helpWrapper, helpVisible && styles.helpVisible)}
          onMouseLeave={handlePanelMouseLeave}
        >
          <HelpPanel />
        </div>
      </div>
    </div>
  );
};

export default Information;

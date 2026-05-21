import { useRef, useState } from "react";

import { ContentBlock, Dialogue, HelpPanel } from "@/components/molecules";

import styles from "./Information.module.scss";

export interface InformationProps {}

const Information = ({}: InformationProps) => {
  const [showHelp, setShowHelp] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleHelpEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setShowHelp(true);
    }, 2200);
  };

  const handleInformationLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setShowHelp(false);
  };

  return (
    <div
      className={styles.container}
      data-help-open={showHelp}
      onMouseLeave={handleInformationLeave}
    >
      <Dialogue navigation="chevron" help onMouseEnter={handleHelpEnter}>
        <ContentBlock
          title="Lorem Ipsum Dolor Sit"
          copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Dialogue>
      <div className={styles.helpPanel} aria-hidden={!showHelp}>
        <HelpPanel />
      </div>
    </div>
  );
};

export default Information;

import { useRef, useState } from "react";
import classNames from "classnames";

import video from "@/assets/nature.mp4";

import { Button } from "@/components/atoms";
import { ContentBlock, Dialogue, Header } from "@/components/molecules";

import styles from "./HelpPanel.module.scss";

export interface HelpPanelProps {}

const HelpPanel = ({}: HelpPanelProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleHelpEnter = () => {
    timerRef.current = setTimeout(() => setShowOverlay(true), 2200);
  };

  const handleHelpLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className={styles.container}>
      <Dialogue
        navigation={showOverlay ? undefined : "chevron"}
        help
        onMouseEnter={handleHelpEnter}
        onMouseLeave={handleHelpLeave}
      >
        <div
          className={classNames(styles.main, showOverlay && styles.mainHidden)}
        >
          <ContentBlock
            title="Lorem Ipsum Dolor Sit"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
        <HelpOverlay
          visible={showOverlay}
          onHide={() => setShowOverlay(false)}
        />
      </Dialogue>
    </div>
  );
};

interface HelpOverlayProps {
  visible: boolean;
  onHide: () => void;
}

const HelpOverlay = ({ visible, onHide }: HelpOverlayProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleBackEnter = () => {
    timerRef.current = setTimeout(onHide, 2200);
  };

  const handleBackLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div
      className={classNames(styles.overlay, visible && styles.overlayVisible)}
    >
      <div className={styles.content}>
        <div className={styles.video}>
          <div className={styles.button}>
            <Button
              iconName="ArrowLeft"
              label="Exit Help"
              iconPos="start"
              theme="yellow"
              onMouseEnter={handleBackEnter}
              onMouseLeave={handleBackLeave}
            />
          </div>
          <video autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className={styles.copy}>
          <Header
            title="How to Calibrate Using Your Eyes"
            size="medium"
            alignment="center"
          />
          <ol>
            <li>Follow the dot with your eyes.</li>
            <li>
              Keep your gaze on the dot until you see the confirmation
              animation.
            </li>
            <li>Repeat this process for each dot throughout the test.</li>
          </ol>
          <div className={styles.skip}>
            <span>
              If you would like to skip this module, you can gaze here:
            </span>
            <Button label="Skip Module" iconName="ArrowRight" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPanel;

import { useRef } from "react";
import classNames from "classnames";

import video from "@/assets/calibration-test.mp4";

import { Button } from "@/components/atoms";
import { Header } from "@/components/molecules";

import styles from "./HelpScreen.module.scss";

export interface HelpScreenProps {
  theme?: "light" | "contrast";
  onExit?: () => void;
}

const HelpScreen = ({ theme = "contrast", onExit }: HelpScreenProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleExitEnter = () => {
    timerRef.current = setTimeout(() => onExit?.(), 2200);
  };

  const handleExitLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className={classNames(styles.container, styles[theme])}>
      <Button
        iconName="ArrowLeft"
        label="Exit Help"
        iconPos="start"
        theme={theme}
        addClassName={styles.button}
        onMouseEnter={handleExitEnter}
        onMouseLeave={handleExitLeave}
      />
      <div className={styles.content}>
        <Header
          title="How to Calibrate Using Your Eyes"
          separator
          size="medium"
          theme={theme}
        />
        <div className={styles.grid}>
          <div className={styles.video}>
            <video autoPlay muted loop playsInline>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className={styles.copy}>
            <ol>
              <li>Follow the dot with your eyes.</li>
              <li>
                Keep your gaze on the dot until you see the confirmation
                animation.
              </li>
              <li>Repeat this process for each dot throughout the test.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpScreen;

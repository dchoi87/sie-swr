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
              <li>Focus your gaze on the dot.</li>
              <li>
                Keep looking at the dot until the confirmation animation
                appears.
              </li>
              <li>Once confirmed, move your eyes to the next dot.</li>
              <li>Repeat this process for each dot on the screen.</li>
              <li>
                Try to keep your head still and use only your eyes to follow the
                dots.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpScreen;

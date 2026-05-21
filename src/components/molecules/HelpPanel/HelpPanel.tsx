import { Dialogue } from "@/components/molecules";
import { Button, Icon } from "@/components/atoms";

import video from "@/assets/calibration.mp4";

import styles from "./HelpPanel.module.scss";

export interface HelpPanelProps {}

const HelpPanel = ({}: HelpPanelProps) => (
  <Dialogue>
    <div className={styles.container}>
      <div className={styles.copy}>
        <div className={styles.title}>
          <Icon iconName="QuestionCircleFill" />
          <span>Calibration Help</span>
        </div>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className={styles.instructions}>
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation</li>
          </ol>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          label="Skip Module"
          theme="green"
          iconName="SkipEnd"
          alignment="center"
        />
        <Button
          label="Restart Module"
          theme="red"
          iconName="Power"
          alignment="center"
        />
      </div>
    </div>
  </Dialogue>
);

export default HelpPanel;

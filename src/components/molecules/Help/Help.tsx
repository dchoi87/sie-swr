import classNames from "classnames";

import { Button, Icon } from "@/components/atoms";

import video from "@/assets/animation.mp4";

import styles from "./Help.module.scss";

export interface HelpProps {}

const Help = ({}: HelpProps) => (
  <div className={styles.container}>
    <div className={styles.copy}>
      <div className={styles.title}>
        <Icon iconName="QuestionCircleFill" />
        <span>Visual Acuity Help</span>
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
          <li>Laboris nisi ut aliquip ex ea commodo consequat</li>
        </ol>
      </div>
      <Button
        label="Skip Module"
        type="contrast"
        variant="green"
        iconName="SkipEnd"
      />
      <Button
        label="Restart Module"
        type="contrast"
        variant="red"
        iconName="Power"
      />
    </div>
  </div>
);

export default Help;

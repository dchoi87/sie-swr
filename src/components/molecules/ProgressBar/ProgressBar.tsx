import classNames from "classnames";

import styles from "./ProgressBar.module.scss";

export interface ProgressBarProps {
  currentStep?: number;
}

const steps = [
  "Calibration",
  "Instructions",
  "Pupillometry",
  "Visual Acuity",
  "Visual Field",
  "Patient History",
  "Complete",
];

const ProgressBar = ({ currentStep = 0 }: ProgressBarProps) => (
  <div className={styles.container}>
    {steps.map((label, index) => (
      <div key={index} className={styles.step}>
        <div className={styles.circleRow}>
          <div
            className={classNames(styles.connector, {
              [styles.hidden]: index === 0,
              [styles.active]: index <= currentStep,
            })}
          />
          <div
            className={classNames(styles.circle, {
              [styles.active]: index <= currentStep,
            })}
          />
          <div
            className={classNames(styles.connector, {
              [styles.hidden]: index === steps.length - 1,
              [styles.active]: index < currentStep,
            })}
          />
        </div>
        <span className={styles.label}>{label}</span>
      </div>
    ))}
  </div>
);

export default ProgressBar;

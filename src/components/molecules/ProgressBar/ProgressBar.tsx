import classNames from "classnames";
import * as icons from "react-bootstrap-icons";

import styles from "./ProgressBar.module.scss";

import { Icon } from "@/components/atoms";

export type FlowStep = {
  Component: React.ComponentType;
  label?: string;
  icon?: keyof typeof icons;
};

export interface ProgressBarProps {
  steps: FlowStep[];
  currentStep?: number;
}

const ProgressBar = ({ steps, currentStep = 0 }: ProgressBarProps) => (
  <div className={styles.container}>
    {steps.map((step, index) => (
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
          >
            {step.icon && <Icon iconName={step.icon} />}
          </div>
          <div
            className={classNames(styles.connector, {
              [styles.hidden]: index === steps.length - 1,
              [styles.active]: index < currentStep,
            })}
          />
        </div>
        <span className={styles.label}>{step.label}</span>
      </div>
    ))}
  </div>
);

export default ProgressBar;

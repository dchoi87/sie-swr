import { useState } from "react";
import classNames from "classnames";

import { FlowContext } from "@/hooks/useFlow";

import {
  Introduction,
  Calibration,
  VisualAcuity,
  PatientHistory,
  Medication,
  Completion,
} from "@/components/organisms";

import styles from "./Flow.module.scss";

type FlowStep = {
  Component: React.ComponentType;
  hideDots?: boolean;
};

const steps: FlowStep[] = [
  { Component: Calibration, hideDots: true },
  { Component: Introduction },
  { Component: VisualAcuity, hideDots: true },
  { Component: Medication },
  { Component: PatientHistory },
  { Component: Completion },
];

const Flow = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const next = () =>
    setStepIndex((index) => Math.min(index + 1, steps.length - 1));
  const { Component, hideDots } = steps[stepIndex];

  return (
    <FlowContext.Provider value={{ next }}>
      {!hideDots && (
        <div className={styles.dots}>
          {steps.map((_, index) => (
            <div
              key={`flow-dot-${index}`}
              className={classNames(
                styles.dot,
                index === stepIndex && styles.selected,
              )}
            />
          ))}
        </div>
      )}
      <Component />
    </FlowContext.Provider>
  );
};

export default Flow;

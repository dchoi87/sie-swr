import { useState } from "react";

import * as icons from "react-bootstrap-icons";

import { FlowContext } from "@/hooks/useFlow";

import { ProgressBar } from "@/components/molecules";

import {
  Calibration,
  Completion,
  Introduction,
  PatientHistory,
  Pupillometry,
  VisualAcuity,
  VisualField,
} from "@/components/organisms";

import styles from "./Flow.module.scss";

export type FlowStep = {
  Component: React.ComponentType;
  label?: string;
  icon?: keyof typeof icons;
};

export const steps: FlowStep[] = [
  { Component: Calibration, label: "Calibration", icon: "Bullseye" },
  { Component: Introduction, label: "Introduction", icon: "Clipboard2Check" },
  { Component: Pupillometry, label: "Pupillometry", icon: "Eye" },
  { Component: VisualAcuity, label: "Visual Acuity", icon: "Eyeglasses" },
  { Component: VisualField, label: "Visual Field", icon: "Arrows" },
  { Component: PatientHistory, label: "Patient History", icon: "Clipboard2Pulse" },
  { Component: Completion, label: "Completion", icon: "CheckCircle" },
];

const Flow = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const next = () => setStepIndex((index) => Math.min(index + 1, steps.length - 1));
  const { Component } = steps[stepIndex];

  return (
    <FlowContext.Provider value={{ next }}>
      <div className={styles.progress}>
        <ProgressBar steps={steps} currentStep={stepIndex} />
      </div>
      <Component />
    </FlowContext.Provider>
  );
};

export default Flow;

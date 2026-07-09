import { useState } from "react";

import classNames from "classnames";

import { FlowContext } from "@/hooks/useFlow";

import { ProgressBar, Toast, type FlowStep } from "@/components/molecules";

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

export const steps: FlowStep[] = [
  { Component: Calibration, label: "Calibration", icon: "Bullseye" },
  { Component: Introduction, label: "Introduction", icon: "Clipboard2Check" },
  { Component: Pupillometry, label: "Pupillometry", icon: "Eye" },
  { Component: VisualAcuity, label: "Visual Acuity", icon: "Eyeglasses" },
  { Component: VisualField, label: "Visual Field", icon: "Arrows" },
  { Component: PatientHistory, label: "Patient History", icon: "Clipboard2Pulse" },
  { Component: Completion, label: "Completion", icon: "Check2" },
];

const Flow = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [hideProgress, setHideProgress] = useState(false);
  const { Component } = steps[stepIndex];

  const next = () => {
    setHideProgress(false);
    setStepIndex((index) => Math.min(index + 1, steps.length - 1));
  };

  return (
    <FlowContext.Provider value={{ next, hideProgress, setHideProgress }}>
      <div className={classNames(styles.progress, hideProgress && styles.hidden)}>
        <ProgressBar steps={steps} currentStep={stepIndex} />
      </div>
      {Component === PatientHistory && (
        <Toast
          title="Your Waiting Room is Ready!"
          copy="Please return the headset. You can complete the rest of your intake on your phone or tablet."
        />
      )}
      <Component />
    </FlowContext.Provider>
  );
};

export default Flow;

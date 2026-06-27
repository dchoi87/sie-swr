import { useState } from "react";

import { FlowContext } from "@/hooks/useFlow";

import {
  Introduction,
  Calibration,
  VisualAcuity,
  PatientHistory,
  Medication,
  Completion,
} from "@/components/organisms";

const steps = [
  Calibration,
  Introduction,
  VisualAcuity,
  Medication,
  PatientHistory,
  Completion,
];

const Flow = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const next = () =>
    setStepIndex((index) => Math.min(index + 1, steps.length - 1));
  const Step = steps[stepIndex];

  return (
    <FlowContext.Provider value={{ next }}>
      <Step />
    </FlowContext.Provider>
  );
};

export default Flow;

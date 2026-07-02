import { createContext, useContext } from "react";

type FlowContextValue = {
  next: () => void;
  hideProgress: boolean;
  setHideProgress: (v: boolean) => void;
};

const noop = () => {};

export const FlowContext = createContext<FlowContextValue>({
  next: noop,
  hideProgress: false,
  setHideProgress: noop,
});

const useFlow = () => useContext(FlowContext);

export default useFlow;

import { createContext, useContext } from "react";

type FlowContextValue = {
  next: () => void;
};

const noop = () => {};

export const FlowContext = createContext<FlowContextValue>({ next: noop });

const useFlow = () => useContext(FlowContext);

export default useFlow;

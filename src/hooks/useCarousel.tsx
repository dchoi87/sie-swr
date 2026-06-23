import { createContext, useContext } from "react";

type CarouselContextValue = {
  next: () => void;
  prev: () => void;
};

const noop = () => {};

export const CarouselContext = createContext<CarouselContextValue | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used inside CarouselContext.Provider");
  }

  return (
    context ?? {
      next: noop,
      prev: noop,
    }
  );
};

export default useCarousel;

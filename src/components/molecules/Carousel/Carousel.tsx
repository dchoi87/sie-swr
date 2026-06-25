import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";

import { CarouselContext } from "@/hooks/useCarousel";

import { Button } from "@/components/atoms";
import { HelpScreen } from "@/components/molecules";

import "./Embla.scss";
import styles from "./Carousel.module.scss";

export interface CarouselProps {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  navigation?: boolean;
}

const Carousel = ({
  children,
  size = "sm",
  navigation = true,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ watchDrag: false });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideCount = emblaApi?.slideNodes().length ?? 0;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  const next = () => {
    emblaApi?.scrollNext();
  };

  const prev = () => {
    emblaApi?.scrollPrev();
  };

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelected = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateSelected();

    emblaApi.on("select", updateSelected);
    return () => {
      emblaApi.off("select", updateSelected);
    };
  }, [emblaApi]);

  const handleSlideEnter = (direction?: string) => {
    timerRef.current = setTimeout(() => {
      switch (direction) {
        case "next":
          next();
          break;
        case "prev":
          prev();
          break;
        case "help":
          setShowHelp(true);
          break;
        default:
          break;
      }
    }, 2200);
  };

  const handleSlideLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  if (showHelp) {
    return <HelpScreen theme="contrast" onExit={() => setShowHelp(false)} />;
  }

  return (
    <CarouselContext.Provider value={{ next, prev }}>
      <div className={classNames(styles.container, styles[size])}>
        <div className={classNames(styles.help)}>
          <Button
            iconName="QuestionLg"
            theme="yellow"
            onMouseEnter={() => handleSlideEnter("help")}
            onMouseLeave={handleSlideLeave}
          />
        </div>
        <div className="embla-viewport" ref={emblaRef}>
          <div className="embla-container">{children}</div>
        </div>
        {navigation && slideCount > 1 && (
          <div className={classNames(styles.navigation)}>
            <Button
              iconName="ChevronLeft"
              onMouseEnter={() => handleSlideEnter("prev")}
              onMouseLeave={handleSlideLeave}
              addClassName={classNames(selectedIndex === 0 && styles.hidden)}
            />
            <div className={styles.dots}>
              {emblaApi?.scrollSnapList().map((_, index) => (
                <div
                  key={`dot-${index}`}
                  className={classNames(
                    styles.dot,
                    index === selectedIndex && styles.selected,
                  )}
                ></div>
              ))}
            </div>
            <Button
              iconName="ChevronRight"
              onMouseEnter={() => handleSlideEnter("next")}
              onMouseLeave={handleSlideLeave}
              addClassName={classNames(
                selectedIndex === slideCount - 1 && styles.hidden,
              )}
            />
          </div>
        )}
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;

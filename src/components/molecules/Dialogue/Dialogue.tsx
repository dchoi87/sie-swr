import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";

import { CarouselContext } from "@/hooks/useCarousel";
import useFlow from "@/hooks/useFlow";

import { Button } from "@/components/atoms";
import { HelpScreen } from "@/components/molecules";

import "./Embla.scss";
import styles from "./Dialogue.module.scss";

export interface DialogueProps {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  navigation?: boolean;
  navigationType?: "chevron" | "confirmation";
  hideHelp?: number[];
  hideNav?: number[];
}

const Dialogue = ({
  children,
  size = "sm",
  navigation = true,
  navigationType = "chevron",
  hideHelp,
  hideNav,
}: DialogueProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ watchDrag: false });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideCount = emblaApi?.slideNodes().length ?? 0;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const { next: flowNext } = useFlow();

  const next = () => {
    if (selectedIndex === slideCount - 1) {
      flowNext();
      return;
    }
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

  useEffect(() => {
    if (!showHelp) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [showHelp]);

  return (
    <CarouselContext.Provider value={{ next, prev }}>
      {showHelp && (
        <div className={styles.helpOverlay}>
          <HelpScreen onExit={() => setShowHelp(false)} />
        </div>
      )}
      <div className={classNames(styles.container, styles[size])}>
        <div
          className={classNames(
            styles.help,
            hideHelp?.includes(selectedIndex) && styles.hidden,
          )}
        >
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
        {navigation && !hideNav?.includes(selectedIndex) && slideCount > 1 && (
          <div className={classNames(styles.navigation)}>
            {navigationType === "confirmation" ? (
              <Button
                label="Decline"
                iconName="XCircle"
                iconPos="start"
                theme="red"
                onMouseEnter={() => handleSlideEnter("next")}
                onMouseLeave={handleSlideLeave}
              />
            ) : (
              <Button
                iconName="ChevronLeft"
                onMouseEnter={() => handleSlideEnter("prev")}
                onMouseLeave={handleSlideLeave}
                addClassName={classNames(selectedIndex === 0 && styles.hidden)}
              />
            )}
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
            {navigationType === "confirmation" ? (
              <Button
                label="Confirm"
                iconName="Check2Circle"
                iconPos="start"
                theme="green"
                onMouseEnter={() => handleSlideEnter("next")}
                onMouseLeave={handleSlideLeave}
              />
            ) : (
              <Button
                iconName="ChevronRight"
                onMouseEnter={() => handleSlideEnter("next")}
                onMouseLeave={handleSlideLeave}
                addClassName={classNames(
                  selectedIndex === slideCount - 1 && styles.hidden,
                )}
              />
            )}
          </div>
        )}
      </div>
    </CarouselContext.Provider>
  );
};

export default Dialogue;

import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/atoms";

import "./Embla.scss";
import styles from "./Carousel.module.scss";

export interface CarouselProps {
  children?: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideCount = emblaApi?.slideNodes().length ?? 0;
  const [selectedIndex, setSelectedIndex] = useState(0);

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
          emblaApi?.scrollNext();
          break;
        case "prev":
          emblaApi?.scrollPrev();
          break;
        case "help":
          console.log("help triggered");
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

  return (
    <div className={classNames(styles.container)}>
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
      {slideCount > 1 && (
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
  );
};

export default Carousel;

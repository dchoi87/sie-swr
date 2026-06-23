import { useLayoutEffect, useRef, useState } from "react";

import { useCarousel } from "@/hooks";

import { Icon } from "@/components/atoms";

import styles from "./Radio.module.scss";

const RING_OFFSET = 8;
const RING_WIDTH = 3;

const Radio = () => {
  const { next } = useCarousel();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [path, setPath] = useState("");
  const [selected, setSelected] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setSelected(!selected);
      next();
      timerRef.current = null;
    }, 2200);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useLayoutEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const updatePath = () => {
      const width = button.offsetWidth + RING_OFFSET * 2;
      const height = button.offsetHeight + RING_OFFSET * 2;

      const strokeInset = RING_WIDTH / 2;
      const radius = height / 2 - strokeInset;

      const left = strokeInset;
      const right = width - strokeInset;
      const top = strokeInset;
      const bottom = height - strokeInset;
      const centerX = width / 2;

      setPath(`
          M ${centerX} ${top}
          H ${right - radius}
          A ${radius} ${radius} 0 0 1 ${right - radius} ${bottom}
          H ${left + radius}
          A ${radius} ${radius} 0 0 1 ${left + radius} ${top}
          H ${centerX}
        `);
    };

    updatePath();

    const observer = new ResizeObserver(updatePath);
    observer.observe(button);

    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={buttonRef}
      className={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon iconName={selected ? "CheckCircleFill" : "Circle"} />
      <svg className={styles.ring} aria-hidden="true">
        <path className={styles.ringPath} d={path} pathLength="1" />
      </svg>
    </button>
  );
};

export default Radio;

import { useState, useRef, useEffect } from "react";

import { Dot } from "@/components/atoms";

import styles from "./Calibration.module.scss";

const Calibration = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveDot = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const dotSize = 30;
    const maxX = rect.width - dotSize;
    const maxY = rect.height - dotSize;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setPosition({ x: randomX, y: randomY });
  };

  const handleHover = () => {
    timeoutRef.current = window.setTimeout(() => {
      moveDot();
    }, 2200);
  };

  const handleLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    // initial center position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={styles.dot}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <Dot />
      </div>
    </div>
  );
};

export default Calibration;

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Calibration.module.scss";

const RING_OFFSET = 5;
const RING_WIDTH = 3;

export default function Calibration() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [path, setPath] = useState("");

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
    <button ref={buttonRef} className={styles.calibrationButton} type="button">
      <span className={styles.label}>Calibration</span>

      <svg className={styles.ring} aria-hidden="true">
        <path className={styles.ringPath} d={path} pathLength="1" />
      </svg>
    </button>
  );
}

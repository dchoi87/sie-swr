import { useLayoutEffect, useRef, useState } from "react";
import styles from "./Dot.module.scss";

const RING_OFFSET = 8;
const RING_WIDTH = 3;

const Dot = () => {
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
    <button ref={buttonRef} className={styles.dot} type="button">
      <svg className={styles.ring} aria-hidden="true">
        <path className={styles.ringPath} d={path} pathLength="1" />
      </svg>
    </button>
  );
};

export default Dot;

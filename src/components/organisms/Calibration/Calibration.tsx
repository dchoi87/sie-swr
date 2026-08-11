import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import useFlow from "@/hooks/useFlow";

import { Dot } from "@/components/atoms";
import { Header } from "@/components/molecules";

import styles from "./Calibration.module.scss";

const DOT_SIZE = 30;
const INSET_RATIO = 0.2;
const CORNER_COUNT = 4;

const getCorners = (rect: DOMRect) => {
  const insetX = rect.width * INSET_RATIO;
  const insetY = rect.height * INSET_RATIO;
  const left = insetX - DOT_SIZE / 2;
  const right = rect.width - insetX - DOT_SIZE / 2;
  const top = insetY - DOT_SIZE / 2;
  const bottom = rect.height - insetY - DOT_SIZE / 2;

  return [
    { x: right, y: top }, // top right
    { x: left, y: top }, // top left
    { x: left, y: bottom }, // bottom left
    { x: right, y: bottom }, // bottom right
  ];
};

const Calibration = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const completionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [position, setPosition] = useState(() => ({
    x: window.innerWidth / 2 - DOT_SIZE / 2,
    y: window.innerHeight / 2 - DOT_SIZE / 2,
  }));
  const [directions, setDirections] = useState(true);
  const [step, setStep] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const { next: flowNext, setHideProgress } = useFlow();

  useEffect(() => {
    return () => {
      if (completionTimerRef.current) {
        clearTimeout(completionTimerRef.current);
      }
    };
  }, []);

  const moveToNextCorner = () => {
    if (!containerRef.current) return;

    const corners = getCorners(containerRef.current.getBoundingClientRect());
    setPosition(corners[step]);
    setStep((prev) => prev + 1);
  };

  const handleHover = () => {
    if (step > CORNER_COUNT) return;

    timeoutRef.current = window.setTimeout(() => {
      if (directions) {
        setDirections(false);
        setHideProgress(true);
      }
      if (step === CORNER_COUNT) {
        setShowCompletion(true);
        completionTimerRef.current = setTimeout(() => flowNext(), 2200);
      } else {
        moveToNextCorner();
      }
    }, 2200);
  };

  const handleLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={classNames(styles.copy, !directions && styles.hidden)}>
        <div className={styles.directions}>
          <p>
            Focus on the <strong>dot</strong> to get started.
          </p>
          <p>
            Keep your <strong> gaze steady</strong> for 2 seconds.
          </p>
        </div>
      </div>
      <div className={classNames(styles.copy, styles.completion, !showCompletion && styles.hidden)}>
        <Header title="Calibration Successful!" alignment="center" />
        <div className={styles.directions}>Please follow the directions on the next screen.</div>
      </div>
      <div
        className={classNames(styles.dot, showCompletion && styles.hidden)}
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

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import { Dot, Button } from "@/components/atoms";
import { Header, HelpScreen } from "@/components/molecules";

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
  const helpTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [directions, setDirections] = useState(true);
  const [step, setStep] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

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
      }
      if (step === CORNER_COUNT) {
        setShowCompletion(true);
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

  const handleHelpEnter = () => {
    helpTimerRef.current = setTimeout(() => setShowHelp(true), 2200);
  };

  const handleHelpLeave = () => {
    if (helpTimerRef.current) {
      clearTimeout(helpTimerRef.current);
      helpTimerRef.current = null;
    }
  };

  useEffect(() => {
    // initial center position
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: rect.width / 2 - DOT_SIZE / 2,
        y: rect.height / 2 - DOT_SIZE / 2,
      });
    }
  }, []);

  if (showHelp) {
    return <HelpScreen onExit={() => setShowHelp(false)} />;
  }

  return (
    <div ref={containerRef} className={styles.container}>
      <Button
        iconName="QuestionLg"
        theme="contrast"
        addClassName={classNames(styles.help, !directions && styles.hidden)}
        onMouseEnter={handleHelpEnter}
        onMouseLeave={handleHelpLeave}
      />
      <div className={classNames(styles.copy, !directions && styles.hidden)}>
        <div className={styles.directions}>
          Please look directly at the <strong>dot</strong> and keep your
          <strong> gaze steady</strong> until it changes
        </div>
      </div>
      <div
        className={classNames(
          styles.copy,
          styles.completion,
          !showCompletion && styles.hidden,
        )}
      >
        <Header title="Test Successful!" alignment="center" />
        <div className={styles.directions}>
          Please follow the directions on the next screen.
        </div>
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

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import useFlow from "@/hooks/useFlow";

import { Button } from "@/components/atoms";
import { Header, HelpScreen } from "@/components/molecules";

import styles from "./VisualField.module.scss";

const VisualField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const helpTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [step, setStep] = useState<"intro" | "test" | "completion">("intro");
  const [countdown, setCountdown] = useState(5);
  const { next: flowNext, setHideProgress } = useFlow();

  useEffect(() => {
    if (step !== "completion") return;

    flowTimerRef.current = setTimeout(() => flowNext(), 2200);

    return () => {
      if (flowTimerRef.current) {
        clearTimeout(flowTimerRef.current);
      }
    };
  }, [step, flowNext]);

  useEffect(() => {
    if (step !== "test") return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          completionTimerRef.current = setTimeout(() => setStep("completion"), 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
      if (completionTimerRef.current) {
        clearTimeout(completionTimerRef.current);
      }
    };
  }, [step]);

  const handleHover = () => {
    timeoutRef.current = window.setTimeout(() => {
      setHideProgress(true);
      setStep("test");
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

  if (showHelp) {
    return <HelpScreen onExit={() => setShowHelp(false)} />;
  }

  return (
    <div
      ref={containerRef}
      className={classNames(styles.container, step === "test" && styles.darken)}
    >
      <Button
        iconName="QuestionLg"
        theme="contrast"
        addClassName={classNames(styles.help, step !== "intro" && styles.hidden)}
        onMouseEnter={handleHelpEnter}
        onMouseLeave={handleHelpLeave}
      />
      {/* intro */}
      <div className={classNames(styles.copy, step !== "intro" && styles.hidden)}>
        <Header title="Let’s test peripheral vision" alignment="center" />
        <div className={styles.directions}>
          Keep your eyes on the bright center dot. When another dot appears, look directly at it.
          Some dots may be very dim — that’s normal. After each dot,{" "}
          <strong>return your gaze to the center.</strong> If you don’t see a dot, don’t search for
          it. <br />
          <br /> Select <strong>Begin Test</strong> when you’re ready.
        </div>
        <div
          className={classNames(styles.trigger)}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <Button label="Begin Test" iconName="ArrowRight" iconPos="end" theme="contrast" />
        </div>
      </div>

      {/* test */}
      <div className={classNames(styles.test, step !== "test" && styles.hidden)}>
        <Header title="Mock Test in Progress..." alignment="center" size="medium" />
        <div className={styles.countdown}>{countdown}</div>
      </div>

      {/* completion */}
      <div className={classNames(styles.copy, step !== "completion" && styles.hidden)}>
        <Header title="Great job!" alignment="center" />
        <div className={classNames(styles.directions, styles.center)}>
          Please follow the directions on the next screen.
        </div>
      </div>
    </div>
  );
};

export default VisualField;

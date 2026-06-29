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
  const { next: flowNext } = useFlow();

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
          completionTimerRef.current = setTimeout(
            () => setStep("completion"),
            1000,
          );
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
    <div ref={containerRef} className={styles.container}>
      <Button
        iconName="QuestionLg"
        theme="contrast"
        addClassName={classNames(styles.help)}
        onMouseEnter={handleHelpEnter}
        onMouseLeave={handleHelpLeave}
      />
      {/* intro */}
      <div
        className={classNames(styles.copy, step !== "intro" && styles.hidden)}
      >
        <Header title="Visual Field" alignment="center" />
        <div className={styles.directions}>
          <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div
          className={classNames(styles.trigger)}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <Button
            label="Begin Test"
            iconName="ArrowRight"
            iconPos="end"
            theme="contrast"
          />
        </div>
      </div>

      {/* test */}
      <div
        className={classNames(styles.test, step !== "test" && styles.hidden)}
      >
        <Header
          title="Mock Test in Progress..."
          alignment="center"
          size="medium"
        />
        <div className={styles.countdown}>{countdown}</div>
      </div>

      {/* completion */}
      <div
        className={classNames(
          styles.copy,
          step !== "completion" && styles.hidden,
        )}
      >
        <Header title="Test Successful!" alignment="center" />
        <div className={styles.directions}>
          Please follow the directions on the next screen.
        </div>
      </div>
    </div>
  );
};

export default VisualField;

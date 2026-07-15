import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import useFlow from "@/hooks/useFlow";

import { Button } from "@/components/atoms";
import { Header, HelpScreen } from "@/components/molecules";

import styles from "./VisualAcuity.module.scss";

export interface VisualAcuityProps {
  type?: "isolated" | "snellen";
}

const VisualAcuity = ({ type = "isolated" }: VisualAcuityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const helpTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [step, setStep] = useState<"intro" | "test" | "completion">("intro");
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
    <div ref={containerRef} className={classNames(styles.container, step === "test" && styles.transparent)}>
      <Button
        iconName="QuestionLg"
        theme="contrast"
        addClassName={classNames(styles.help, step !== "intro" && styles.hidden)}
        onMouseEnter={handleHelpEnter}
        onMouseLeave={handleHelpLeave}
      />
      {/* intro */}
      <div className={classNames(styles.copy, step !== "intro" && styles.hidden)}>
        <Header title="Visual Acuity" alignment="center" />
        <div className={styles.directions}>
          <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className={classNames(styles.trigger)} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <Button label="Begin Test" iconName="ArrowRight" iconPos="end" theme="contrast" />
        </div>
      </div>

      {/* test */}
      <div className={classNames(styles.test, step !== "test" && styles.hidden)}>
        {type === "isolated" ? (
          <IsolatedOptotypeTest onComplete={() => setStep("completion")} />
        ) : (
          <SnellenTest onComplete={() => setStep("completion")} />
        )}
      </div>

      {/* completion */}
      <div className={classNames(styles.copy, step !== "completion" && styles.hidden)}>
        <Header title="Visual Acuity Complete!" alignment="center" />
        <div className={classNames(styles.directions, styles.center)}>
          Please follow the directions on the next screen.
        </div>
      </div>
    </div>
  );
};

const OPTOTYPES = ["C", "D", "H", "K", "N", "O", "R", "S", "V", "Z"];
const OPTOTYPE_SIZES = [96, 72, 56, 44, 34, 26, 20];

const IsolatedOptotypeTest = ({ onComplete }: { onComplete: () => void }) => {
  const [letter, setLetter] = useState("A");
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    const nextClicks = clicks + 1;
    setClicks(nextClicks);

    if (nextClicks >= OPTOTYPE_SIZES.length) {
      onComplete();
      return;
    }

    setLetter((prev) => {
      let next = prev;
      while (next === prev) {
        next = OPTOTYPES[Math.floor(Math.random() * OPTOTYPES.length)];
      }
      return next;
    });
  };

  const size = OPTOTYPE_SIZES[Math.min(clicks, OPTOTYPE_SIZES.length - 1)];

  return (
    <div className={styles.board} onClick={handleClick}>
      <span className={styles.letter} style={{ fontSize: size }}>
        {letter}
      </span>
    </div>
  );
};

const SNELLEN_ROWS = [
  { acuity: "20/200", size: 96, letters: "E" },
  { acuity: "20/100", size: 72, letters: "FP" },
  { acuity: "20/70", size: 56, letters: "TOZ" },
  { acuity: "20/50", size: 44, letters: "LPED" },
  { acuity: "20/40", size: 34, letters: "PECFD" },
  { acuity: "20/30", size: 26, letters: "EDFCZP" },
  { acuity: "20/20", size: 20, letters: "FELOPZD" },
];

const SnellenTest = ({ onComplete }: { onComplete: () => void }) => {
  const [activeRow, setActiveRow] = useState(0);

  const handleRowClick = (index: number) => {
    if (index !== activeRow) return;

    if (index >= SNELLEN_ROWS.length - 1) {
      onComplete();
      return;
    }

    setActiveRow(index + 1);
  };

  return (
    <div className={styles.board}>
      <div className={styles.chart}>
        {SNELLEN_ROWS.map((row, index) => (
          <div
            key={row.acuity}
            className={classNames(styles.row, index === activeRow && styles.active)}
            style={{ fontSize: row.size }}
            onClick={() => handleRowClick(index)}
          >
            {row.letters.split("").map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualAcuity;

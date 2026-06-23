import { useLayoutEffect, useRef, useState } from "react";
import * as icons from "react-bootstrap-icons";
import classNames from "classnames";

import { Icon } from "@/components/atoms";

import styles from "./Button.module.scss";

export const BUTTON_THEME = ["neutral", "green", "red", "yellow"] as const;

type ButtonTheme = (typeof BUTTON_THEME)[number];
export interface ButtonProps {
  addClassName?: string;
  theme?: ButtonTheme;
  label?: string;
  iconName?: keyof typeof icons;
  iconPos?: "start" | "end";
  alignment?: "left" | "center";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const RING_OFFSET = 7;
const RING_WIDTH = 3;

const Button = ({
  addClassName,
  theme = "neutral",
  label,
  iconName,
  iconPos = "end",
  alignment = "left",
  onMouseEnter,
  onMouseLeave,
  ...props
}: ButtonProps) => {
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
    <button
      ref={buttonRef}
      type="button"
      className={classNames(
        styles.button,
        styles[theme],
        styles[iconPos],
        styles[alignment],
        !label && styles.icon,
        addClassName,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {label && <span>{label}</span>}
      {iconName && <Icon iconName={iconName} size="24" />}
      <svg className={styles.ring} aria-hidden="true">
        <path className={styles.ringPath} d={path} pathLength="1" />
      </svg>
    </button>
  );
};

export default Button;

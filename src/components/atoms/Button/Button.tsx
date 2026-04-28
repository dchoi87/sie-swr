import React from "react";

import classNames from "classnames";

import styles from "./Button.module.scss";

export interface ButtonProps {
  primary?: boolean;
  label: string;
}

/** Primary UI component for user interaction */
const Button = ({ primary = false, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        primary ? styles.primary : styles.secondary,
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

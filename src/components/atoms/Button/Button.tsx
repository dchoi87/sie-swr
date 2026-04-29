import classNames from "classnames";

import styles from "./Button.module.scss";

export interface ButtonProps {
  type?: string;
  label: string;
}

/** Primary UI component for user interaction */
const Button = ({ type = "primary", label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, styles[type])}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

import * as icons from "react-bootstrap-icons";
import classNames from "classnames";

import { Icon } from "@/components/atoms";

import styles from "./Button.module.scss";

export const BUTTON_TYPES = ["primary", "secondary"] as const;

type ButtonType = (typeof BUTTON_TYPES)[number];
export interface ButtonProps {
  type?: ButtonType;
  label?: string;
  iconName?: keyof typeof icons;
  iconPos?: "left" | "right";
}

const Button = ({
  type = "primary",
  label,
  iconName,
  iconPos = "right",
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.button,
        styles[type],
        styles[iconPos],
        !label && styles.icon,
      )}
      {...props}
    >
      {label && <span>{label}</span>}
      {iconName && <Icon iconName={iconName} size="24" />}
    </button>
  );
};

export default Button;

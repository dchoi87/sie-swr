import * as icons from "react-bootstrap-icons";
import classNames from "classnames";

import { Icon } from "@/components/atoms";

import styles from "./Button.module.scss";

export const BUTTON_TYPES = ["primary", "secondary", "contrast"] as const;

type ButtonType = (typeof BUTTON_TYPES)[number];

export const BUTTON_VARIANT = ["", "green", "red", "yellow"] as const;

type ButtonVariantType = (typeof BUTTON_VARIANT)[number];
export interface ButtonProps {
  type?: ButtonType;
  variant?: ButtonVariantType;
  label?: string;
  iconName?: keyof typeof icons;
  iconPos?: "left" | "right";
}

const Button = ({
  type = "primary",
  variant = "",
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
        styles[variant],
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

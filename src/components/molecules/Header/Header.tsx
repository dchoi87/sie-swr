import classNames from "classnames";

import styles from "./Header.module.scss";

export interface HeaderProps {
  alignment?: "left" | "center";
  theme?: "light" | "contrast";
  size?: "small" | "medium" | "large";
  title: string;
  subtext?: string;
  separator?: boolean;
}

const Header = ({
  alignment = "left",
  theme = "contrast",
  title,
  subtext,
  size = "large",
  separator,
}: HeaderProps) => (
  <div
    className={classNames(
      styles.container,
      styles[theme],
      styles[alignment],
      separator && styles.separator,
    )}
  >
    <h1 className={classNames(styles.title, styles[size])}>{title}</h1>
    {subtext && <h2 className={styles.subtext}>{subtext}</h2>}
  </div>
);

export default Header;

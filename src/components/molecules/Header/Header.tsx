import classNames from "classnames";

import styles from "./Header.module.scss";

export interface HeaderProps {
  alignment?: "left" | "center";
  size?: "medium" | "large";
  title: string;
  subtext?: string;
}

const Header = ({
  alignment = "left",
  title,
  subtext,
  size = "large",
}: HeaderProps) => (
  <div className={classNames(styles.container, styles[alignment])}>
    <h1 className={classNames(styles.title, styles[size])}>{title}</h1>
    {subtext && <h2 className={styles.subtext}>{subtext}</h2>}
  </div>
);

export default Header;

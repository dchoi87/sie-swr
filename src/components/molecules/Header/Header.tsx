import classNames from "classnames";

import styles from "./Header.module.scss";

export interface HeaderProps {
  alignment?: "left" | "center";
  title: string;
  subtext?: string;
}

const Header = ({ alignment = "left", title, subtext }: HeaderProps) => (
  <div className={classNames(styles.container, styles[alignment])}>
    <h1 className={styles.title}>{title}</h1>
    {subtext && <h2 className={styles.subtext}>{subtext}</h2>}
  </div>
);

export default Header;

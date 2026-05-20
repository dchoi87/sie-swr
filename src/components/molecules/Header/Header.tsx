import classNames from "classnames";

import styles from "./Header.module.scss";

export interface HeaderProps {
  alignment?: "left" | "center";
}

const Header = ({ alignment = "left" }: HeaderProps) => (
  <div className={classNames(styles.container, styles[alignment])}>
    <h1 className={styles.title}>Lorem Ipsum Dolor Sit</h1>
    <h2 className={styles.subtext}>
      Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua ut enim ad minim
    </h2>
  </div>
);

export default Header;

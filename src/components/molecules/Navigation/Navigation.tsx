import classNames from "classnames";

import { Button } from "@/components/atoms";

import styles from "./Navigation.module.scss";

export const NAVIGATION_TYPES = ["chevron", "confirm", "text"] as const;

export type NavigationType = (typeof NAVIGATION_TYPES)[number];

export interface NavigationProps {
  type?: NavigationType;
  dots?: number;
}

const Navigation = ({ type = "chevron", dots = 5 }: NavigationProps) => (
  <div className={classNames(styles.container)}>
    <div className={classNames(styles.navigation)}>
      <NavButtons type={type} />
    </div>
    <div className={styles.dots}>
      {[...Array(dots)].map((_el, i) => {
        return <div key={`dot-${i}`} className={styles.dot}></div>;
      })}
    </div>
  </div>
);

const NavButtons = ({ type }: { type: NavigationType; contrast?: boolean }) => {
  switch (type) {
    case "chevron":
      return (
        <>
          <Button iconName="ChevronLeft" />
          <Button iconName="ChevronRight" />
        </>
      );
    case "confirm":
      return (
        <>
          <Button iconName="XLg" theme="red" />
          <Button iconName="CheckLg" theme="green" />
        </>
      );
    case "text":
      return (
        <>
          <Button label="No" iconName="XLg" theme="red" />
          <Button label="Yes" iconName="CheckLg" theme="green" />
        </>
      );
    default:
      return <div className="default" />;
  }
};

export default Navigation;

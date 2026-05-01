import classNames from "classnames";

import { Button } from "@/components/atoms";

import styles from "./Navigation.module.scss";

export const NAVIGATION_TYPES = ["chevron", "confirm", "text"] as const;

export type NavigationType = (typeof NAVIGATION_TYPES)[number];

export interface NavigationProps {
  contrast?: boolean;
  type?: NavigationType;
  dots?: number;
}

const Navigation = ({
  contrast,
  type = "chevron",
  dots = 5,
}: NavigationProps) => (
  <div className={classNames(styles.container)}>
    <div className={classNames(styles.navigation)}>
      <NavButtons type={type} contrast={contrast} />
    </div>
    <div className={styles.dots}>
      {[...Array(dots)].map((_el, i) => {
        return <div key={`dot-${i}`} className={styles.dot}></div>;
      })}
    </div>
  </div>
);

const NavButtons = ({
  type,
  contrast,
}: {
  type: NavigationType;
  contrast?: boolean;
}) => {
  switch (type) {
    case "chevron":
      return (
        <>
          <Button
            iconName="ChevronLeft"
            type={contrast ? "contrast" : "primary"}
          />
          <Button
            iconName="ChevronRight"
            type={contrast ? "contrast" : "primary"}
          />
        </>
      );
    case "confirm":
      return (
        <>
          <Button
            iconName="XLg"
            type={contrast ? "contrast" : "primary"}
            variant="red"
          />
          <Button
            iconName="CheckLg"
            type={contrast ? "contrast" : "primary"}
            variant="green"
          />
        </>
      );
    case "text":
      return (
        <>
          <Button
            label="No"
            iconName="XLg"
            type={contrast ? "contrast" : "primary"}
            variant="red"
          />
          <Button
            label="Yes"
            iconName="CheckLg"
            type={contrast ? "contrast" : "primary"}
            variant="green"
          />
        </>
      );
    default:
      return <div className="default" />;
  }
};

export default Navigation;

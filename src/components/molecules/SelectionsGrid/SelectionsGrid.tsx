import classNames from "classnames";

import { Selection } from "@/components/atoms";

import styles from "./SelectionsGrid.module.scss";

export type Issue = {
  title: string;
  subtext?: string;
};
export interface SelectionsGridProps {
  data: Issue[];
  columns?: "one" | "two";
  theme?: "list" | "card";
}

const SelectionsGrid = ({
  data,
  columns = "two",
  theme = "card",
}: SelectionsGridProps) => (
  <div className={classNames(styles.container, styles[columns])}>
    {data.map((issue, i) => {
      return (
        <div
          key={`selection-${i}`}
          className={classNames(styles.selection, styles[theme])}
        >
          <Selection />
          <div className={styles.copy}>
            <span className={styles.title}>{issue.title}</span>
            {issue.subtext && (
              <span className={styles.subtext}>
                Lorem ipsum dolor sit amet consectetur
              </span>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

export default SelectionsGrid;

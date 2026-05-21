import classNames from "classnames";

import { Selection } from "@/components/atoms";

import styles from "./SelectionsGrid.module.scss";

export interface SelectionsGridProps {}

const issues = [
  { title: "Vision Change", subtext: "Lorem ipsum dolor sit amet consectetur" },
  {
    title: "Flashes / Floaters",
  },
  {
    title: "Pain / Discomfort",
  },
  { title: "Dry Eyes", subtext: "Lorem ipsum dolor sit amet consectetur" },
  {
    title: "Redness / Irritation",
  },
  { title: "Injury", subtext: "Lorem ipsum dolor sit amet consectetur" },
];

const SelectionsGrid = ({}: SelectionsGridProps) => (
  <div className={styles.container}>
    {issues.map((issue, i) => {
      return (
        <div key={`selection-${i}`} className={styles.selection}>
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

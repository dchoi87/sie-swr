import classNames from "classnames";

import { Radio } from "@/components/atoms";
import { Header } from "@/components/molecules";

import styles from "./Selections.module.scss";

export type Issue = {
  title: string;
  subtext?: string;
};
export interface SelectionsProps {
  heading: string;
  directions?: string;
  data: Issue[];
  columns?: "one" | "two";
  theme?: "list" | "card";
}

const Selections = ({
  heading,
  directions,
  data,
  columns = "two",
  theme = "card",
}: SelectionsProps) => (
  <div className={styles.container}>
    <Header
      title={heading}
      subtext={directions}
      size="medium"
      separator={true}
    />
    <div className={classNames(styles.grid, styles[columns])}>
      {data.map((issue, i) => {
        return (
          <div
            key={`selection-${i}`}
            className={classNames(styles.selection, styles[theme])}
          >
            <Radio />
            <div className={styles.copy}>
              <span className={styles.title}>{issue.title}</span>
              {issue.subtext && (
                <span className={styles.subtext}>{issue.subtext}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Selections;

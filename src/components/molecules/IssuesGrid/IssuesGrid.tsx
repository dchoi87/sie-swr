import classNames from "classnames";

import { type DataOption } from "@/mocks/patientHistory";

import { Header } from "@/components/molecules";

import styles from "./IssuesGrid.module.scss";

export interface IssuesGridProps {
  items: DataOption[];
  heading: string;
  directions?: string;
}

const IssuesGrid = ({ heading, directions, items }: IssuesGridProps) => (
  <div className={styles.container}>
    <Header title={heading} subtext={directions} size="medium" separator={true} />
    <div className={classNames(styles.grid, items.length > 10 && styles.threeCol)}>
      {items.map((item, i) => {
        return (
          <div key={`li-${i}`} className={styles.listItem}>
            <div className={styles.copy}>
              <div className={styles.title}>{item.title}</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default IssuesGrid;

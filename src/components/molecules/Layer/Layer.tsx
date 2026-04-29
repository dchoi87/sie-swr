import { Button } from "@/components/atoms";

import styles from "./Layer.module.scss";

export interface LayerProps {
  title?: string;
}

const Layer = ({ title }: LayerProps) => (
  <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div className={styles.cta}>
      <Button label="Lorem Ipsum" />
      <Button label="Lorem Ipsum" type="secondary" />
    </div>
  </div>
);

export default Layer;

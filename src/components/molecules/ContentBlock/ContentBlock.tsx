import classNames from "classnames";

import styles from "./ContentBlock.module.scss";

export interface ContentBlockProps {}

const ContentBlock = ({}: ContentBlockProps) => (
  <div className={styles.container}>Content Block</div>
);

export default ContentBlock;

import { Icon } from "@/components/atoms";
import { Header } from "@/components/molecules";

import styles from "./Error.module.scss";

export interface ErrorProps {
  title: string;
  subtext?: string;
}

const Error = ({ title, subtext }: ErrorProps) => (
  <div className={styles.container}>
    <Icon iconName="ExclamationTriangleFill" />
    <Header title={title} subtext={subtext} alignment="center" />
  </div>
);

export default Error;

import { Button } from "@/components/atoms";
import { Header } from "@/components/molecules";

import styles from "./ContentBlock.module.scss";
import React from "react";

export interface ContentBlockProps {
  title: string;
  copy?: React.ReactNode;
  cta?: string;
}

const ContentBlock = ({ title, copy, cta }: ContentBlockProps) => (
  <div className={styles.container}>
    <Header title={title} alignment="center" />
    <div className={styles.copy}>{copy}</div>
    {cta && (
      <div className={styles.cta}>
        <Button label={cta} iconName="ArrowRight" iconPos="end" />
      </div>
    )}
  </div>
);

export default ContentBlock;

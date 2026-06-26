import { useRef } from "react";

import { Button } from "@/components/atoms";
import { Header } from "@/components/molecules";

import { useCarousel } from "@/hooks";

import styles from "./ContentBlock.module.scss";
import React from "react";

export interface ContentBlockProps {
  title: string;
  copy?: React.ReactNode;
  cta?: string;
}

const ContentBlock = ({ title, copy, cta }: ContentBlockProps) => {
  const { next } = useCarousel();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      next();
      timerRef.current = null;
    }, 2200);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };
  return (
    <div className={styles.container}>
      <Header title={title} alignment="center" />
      <div className={styles.copy}>{copy}</div>
      {cta && (
        <div className={styles.cta}>
          <Button
            label={cta}
            iconName="ArrowRight"
            iconPos="end"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      )}
    </div>
  );
};

export default ContentBlock;

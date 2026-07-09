import classNames from "classnames";

import { Icon } from "@/components/atoms";

import styles from "./Toast.module.scss";
import React, { useEffect, useState } from "react";

export interface ToastProps {
  title: string;
  copy: React.ReactNode;
}

const Toast = ({ title, copy }: ToastProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 500);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.container, { [styles.visible]: visible })}
        onClick={() => setVisible(false)}
      >
        <div className={styles.header}>
          <Icon iconName="CheckCircle" />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <span className={styles.copy}>{copy}</span>
      </div>
    </div>
  );
};

export default Toast;

import { useState } from "react";
import classNames from "classnames";

import { Dialogue, Help } from "@/components/molecules";

import styles from "./Information.module.scss";

export interface InformationProps {}

const Information = ({}: InformationProps) => {
  const [help, setHelp] = useState(false);

  return (
    <div className={styles.container}>
      <Dialogue
        title="Need Help?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        navigation="chevron"
        help={true}
      />
      {help && (
        <div className={classNames(styles.help)}>
          <Help />
        </div>
      )}
    </div>
  );
};

export default Information;

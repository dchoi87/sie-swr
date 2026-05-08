import { useState } from "react";

import { Dialogue, Help } from "@/components/molecules";

import styles from "./Information.module.scss";

export interface InformationProps {}

const Information = ({}: InformationProps) => {
  const [showHelp, setHelp] = useState(true);

  const handleMouseEnter = () => {};

  return (
    <div className={styles.container}>
      <Dialogue
        title="Need Help?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        navigation="chevron"
        help={true}
        onMouseEnter={() => {
          // setHelp(true);
        }}
        onMouseLeave={() => {
          // setHelp(false);
        }}
      />
      {showHelp && <Help />}
    </div>
  );
};

export default Information;

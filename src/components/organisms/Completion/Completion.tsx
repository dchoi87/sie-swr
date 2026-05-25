import classNames from "classnames";

import { Icon } from "@/components/atoms";
import { Dialogue, Header, ContentBlock } from "@/components/molecules";

import styles from "./Completion.module.scss";

export interface CompletionProps {
  title: string;
  subtext?: string;
}

const Completion = ({}: CompletionProps) => (
  <Dialogue>
    <div className={styles.container}>
      <Header
        title="You're All Set!"
        subtext="Please return the device to the technician. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        alignment="center"
      />
    </div>
  </Dialogue>
);

export default Completion;

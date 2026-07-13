import { Header } from "@/components/molecules";

import styles from "./Completion.module.scss";

export interface CompletionProps {}

const Completion = ({}: CompletionProps) => (
  <div className={styles.container}>
    <div className={styles.copy}>
      <Header title="You're All Set!" alignment="center" />
      <div className={styles.directions}>
        Please return the device to the technician. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt
      </div>
    </div>
  </div>
);

export default Completion;

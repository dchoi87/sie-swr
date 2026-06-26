import { Carousel, ContentBlock } from "@/components/molecules";

import styles from "./Completion.module.scss";

export interface CompletionProps {}

const Completion = ({}: CompletionProps) => (
  <Carousel hideHelp={[0]}>
    <div className={styles.container}>
      <ContentBlock
        title="You're All Set!"
        copy="Please return the device to the technician. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      />
    </div>
  </Carousel>
);

export default Completion;

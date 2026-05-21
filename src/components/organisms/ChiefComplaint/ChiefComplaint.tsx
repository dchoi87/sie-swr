import styles from "./ChiefComplaint.module.scss";

import { Dialogue, Header, SelectionsGrid } from "@/components/molecules";

export interface ChiefComplaintProps {}

const ChiefComplaint = ({}: ChiefComplaintProps) => {
  return (
    <Dialogue help navigation="chevron">
      <div className={styles.container}>
        <Header
          title="What eye issues are you experiencing today?"
          subtext="Please select all that apply. Focus your gaze on the circle to make your selection"
          size="medium"
        />
        <SelectionsGrid />
      </div>
    </Dialogue>
  );
};

export default ChiefComplaint;

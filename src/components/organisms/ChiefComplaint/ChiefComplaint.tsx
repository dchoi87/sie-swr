import styles from "./ChiefComplaint.module.scss";

import { Dialogue, Header, SelectionsGrid } from "@/components/molecules";
import { type SelectionsGridProps } from "@/components/molecules/SelectionsGrid/SelectionsGrid";

const ChiefComplaint = ({ data, theme, columns }: SelectionsGridProps) => {
  return (
    <Dialogue help navigation="chevron">
      <div className={styles.container}>
        <Header
          title="What eye issues are you experiencing today?"
          subtext="Please select all that apply. Focus your gaze on the circle to make your selection"
          size="medium"
          separator={true}
        />
        <SelectionsGrid data={data} theme={theme} columns={columns} />
      </div>
    </Dialogue>
  );
};

export default ChiefComplaint;

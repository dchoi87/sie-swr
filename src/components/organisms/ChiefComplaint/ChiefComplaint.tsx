import styles from "./ChiefComplaint.module.scss";

import { Dialogue } from "@/components/molecules";

export interface ChiefComplaintProps {}

const ChiefComplaint = ({}: ChiefComplaintProps) => {
  return (
    <Dialogue width="800px">
      <div>Hello World</div>
    </Dialogue>
  );
};

export default ChiefComplaint;

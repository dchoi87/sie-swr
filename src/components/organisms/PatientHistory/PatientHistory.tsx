import styles from "./PatientHistory.module.scss";

import { chiefComplaints } from "@/mocks/chiefComplaints";

import { Carousel, Selections } from "@/components/molecules";

const PatientHistory = ({}) => {
  return (
    <Carousel size="lg" navigation={false}>
      <div className="embla-slide">
        <Selections
          heading="What eye issues are you experiencing today?"
          directions="Please select all that apply. Focus your gaze on the circle to make your selection"
          data={chiefComplaints}
        />
      </div>
      <div className="embla-slide">
        <Selections
          heading="Which eye are you having trouble with?"
          directions="Focus your gaze on the circle to make your selection"
          data={chiefComplaints}
        />
      </div>
    </Carousel>
  );
};

export default PatientHistory;

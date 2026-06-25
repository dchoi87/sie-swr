import styles from "./PatientHistory.module.scss";

import { patientHistory } from "@/mocks/patientHistory";

import { Carousel, Selections } from "@/components/molecules";

const PatientHistory = ({}) => {
  return (
    <Carousel size="lg" navigation={false}>
      {patientHistory.map((topic, index) => {
        return (
          <div key={`selection-${index}`} className="embla-slide">
            <Selections
              heading={topic.heading}
              directions={topic.directions}
              items={topic.items}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default PatientHistory;

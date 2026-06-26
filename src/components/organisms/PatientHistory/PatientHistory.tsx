import { chiefComplaintsHpi } from "@/mocks/patientHistory";

import { Dialogue, Selections } from "@/components/molecules";

const PatientHistory = ({}) => {
  return (
    <Dialogue size="lg" navigation={false}>
      {chiefComplaintsHpi.map((topic, index) => {
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
    </Dialogue>
  );
};

export default PatientHistory;

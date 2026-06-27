import { chiefComplaintsHpi } from "@/mocks/patientHistory";

import { Dialogue, Selections, MedicationsGrid } from "@/components/molecules";

export interface PatientHistory {
  startIndex?: number;
  endIndex?: number;
}

const PatientHistory = ({ startIndex, endIndex }: PatientHistory) => {
  const slides = chiefComplaintsHpi.slice(
    startIndex,
    endIndex !== undefined ? endIndex + 1 : undefined,
  );

  return (
    <Dialogue size="lg" navigationType="confirmation" hideNav={[2, 3]}>
      {slides.map((topic, index) => {
        if (topic.category === "medication") {
          return (
            <div key={`selection-${index}`} className="embla-slide">
              <MedicationsGrid
                heading={topic.heading}
                directions={topic.directions}
                items={topic.items}
              />
            </div>
          );
        }

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

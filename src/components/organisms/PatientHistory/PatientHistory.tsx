import { patientHistoryData } from "@/mocks/patientHistory";

import { Dialogue, Selections, MedicationsGrid, IssuesGrid } from "@/components/molecules";

import { type SlideIndex } from "@/components/molecules/Dialogue/Dialogue";

export interface PatientHistory {
  startIndex?: number;
  endIndex?: number;
  hideNav?: SlideIndex[];
}

const PatientHistory = ({ startIndex, endIndex, hideNav = [[2, 11]] }: PatientHistory) => {
  const slides = patientHistoryData.slice(startIndex, endIndex !== undefined ? endIndex + 1 : undefined);

  return (
    <Dialogue size="lg" navigationType="confirmation" hideNav={hideNav}>
      {slides.map((topic, index) => {
        if (topic.category === "medication") {
          return (
            <div key={`selection-${index}`} className="embla-slide">
              <MedicationsGrid heading={topic.heading} directions={topic.directions} items={topic.items} />
            </div>
          );
        }

        if (topic.category === "patient history") {
          return (
            <div key={`selection-${index}`} className="embla-slide">
              <IssuesGrid heading={topic.heading} directions={topic.directions} items={topic.items} />
            </div>
          );
        }

        return (
          <div key={`selection-${index}`} className="embla-slide">
            <Selections heading={topic.heading} directions={topic.directions} items={topic.items} />
          </div>
        );
      })}
    </Dialogue>
  );
};

export default PatientHistory;

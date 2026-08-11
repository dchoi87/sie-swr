import { patientHistoryData } from "@/mocks/patientHistory";

import {
  ContentBlock,
  Dialogue,
  Selections,
  MedicationsGrid,
  IssuesGrid,
} from "@/components/molecules";

import { type SlideIndex } from "@/components/molecules/Dialogue/Dialogue";

export interface PatientHistory {
  startIndex?: number;
  endIndex?: number;
  hideNav?: SlideIndex[];
  hideIntro?: boolean;
}

const PatientHistory = ({
  startIndex,
  endIndex,
  hideNav = [0, [3, 12]],
  hideIntro = false,
}: PatientHistory) => {
  const slides = patientHistoryData.slice(
    startIndex,
    endIndex !== undefined ? endIndex + 1 : undefined,
  );

  return (
    <Dialogue size="lg" navigationType="confirmation" hideNav={hideNav}>
      {!hideIntro && (
        <div className="embla-slide align">
          <ContentBlock
            title="Let’s find out why you’re here today"
            copy={
              <>
                <p>In the following few minutes, we will gather information about your health.</p>
                <br />
                <p>
                  If you’re unable to finish, don’t worry - you can complete the questions on a
                  mobile device or with the healthcare provider.
                </p>
              </>
            }
            cta="Continue"
          />
        </div>
      )}
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

        if (topic.category === "patient history") {
          return (
            <div key={`selection-${index}`} className="embla-slide">
              <IssuesGrid
                heading={topic.heading}
                directions={topic.directions}
                items={topic.items}
              />
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

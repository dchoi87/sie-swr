import { patientHistoryData } from "@/mocks/patientHistory";

import { ContentBlock, Dialogue, Selections, MedicationsGrid, IssuesGrid } from "@/components/molecules";

import { type SlideIndex } from "@/components/molecules/Dialogue/Dialogue";

export interface PatientHistory {
  startIndex?: number;
  endIndex?: number;
  hideNav?: SlideIndex[];
  hideIntro?: boolean;
}

const PatientHistory = ({ startIndex, endIndex, hideNav = [0, [3, 12]], hideIntro = false }: PatientHistory) => {
  const slides = patientHistoryData.slice(startIndex, endIndex !== undefined ? endIndex + 1 : undefined);

  return (
    <Dialogue size="lg" navigationType="confirmation" hideNav={hideNav}>
      {!hideIntro && (
        <div className="embla-slide align">
          <ContentBlock
            title="Patient History"
            copy={
              <span>
                We'll now gather some information about your health and today's visit. You'll be able to confirm your{" "}
                <strong>medications</strong>, describe your <strong>symptoms</strong>, and review your{" "}
                <strong>medical, family, and health history</strong>. <br />
                <br />
                If you're unable to finish, don't worry — you can complete the remaining questions later on a{" "}
                <strong>tablet or mobile device.</strong>
              </span>
            }
            cta="Continue"
          />
        </div>
      )}
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

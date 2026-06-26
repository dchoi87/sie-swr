import { medicationsList } from "@/mocks/patientHistory";

import { Dialogue, MedicationsGrid } from "@/components/molecules";

const Medication = ({}) => {
  return (
    <Dialogue size="lg" navigationType="confirmation">
      {medicationsList.map((med, index) => {
        return (
          <div key={`selection-${index}`} className="embla-slide">
            <MedicationsGrid
              heading={med.heading}
              directions={med.directions}
              items={med.items}
            />
          </div>
        );
      })}
    </Dialogue>
  );
};

export default Medication;

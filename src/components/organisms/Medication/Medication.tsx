import { medicationsList } from "@/mocks/patientHistory";

import { Carousel, MedicationsGrid } from "@/components/molecules";

const Medication = ({}) => {
  return (
    <Carousel size="lg" navigationType="confirmation">
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
    </Carousel>
  );
};

export default Medication;

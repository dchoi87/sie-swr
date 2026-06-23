import styles from "./PatientHistory.module.scss";

import { Carousel, Selections } from "@/components/molecules";

const data = [
  {
    title: "Vision Change",
    subtext: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    title: "Flashes / Floaters",
  },
  {
    title: "Eye Pain",
  },
  { title: "Discomfort", subtext: "Lorem ipsum dolor sit amet consectetur" },
  { title: "Dry Eyes", subtext: "Lorem ipsum dolor sit amet consectetur" },
  {
    title: "Redness / Irritation",
  },
  { title: "Injury", subtext: "Lorem ipsum dolor sit amet consectetur" },
  { title: "Other", subtext: "None of these apply" },
];

const PatientHistory = ({}) => {
  return (
    <Carousel size="lg">
      <div className="embla-slide">
        <Selections
          heading="What eye issues are you experiencing today?"
          directions="Please select all that apply. Focus your gaze on the circle to make your selection"
          data={data}
        />
      </div>
      <div className="embla-slide">
        <Selections
          heading="Which eye are you having trouble with?"
          directions="Focus your gaze on the circle to make your selection"
          data={data}
        />
      </div>
    </Carousel>
  );
};

export default PatientHistory;

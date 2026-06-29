export interface SelectionOption {
  title: string;
  subtext: string;
  type?: string;
}

export interface SelectionScreen {
  category: string;
  heading: string;
  directions: string;
  items: SelectionOption[];
}

export const chiefComplaints: SelectionScreen = {
  category: "complaints",
  heading: "What eye issues are you experiencing today?",
  directions: "Focus your gaze on the circle to make your selection",
  items: [
    {
      title: "Vision Change",
      subtext: "Changes in eyesight or visual clarity",
    },
    {
      title: "Blurry Vision",
      subtext: "Vision appears unclear or out of focus",
    },
    {
      title: "Eye Pain",
      subtext: "Pain, soreness, or discomfort in the eye",
    },
    {
      title: "Red Eye",
      subtext: "Redness or irritation of the eye",
    },
    {
      title: "Floaters or Flashes",
      subtext: "Seeing spots, floaters, or flashes of light",
    },
    {
      title: "Dry Eye",
      subtext: "Dryness, irritation, or gritty sensation",
    },
    {
      title: "Double Vision",
      subtext: "Seeing two images instead of one",
    },
    {
      title: "Other",
      subtext: "",
    },
  ],
};

export const location: SelectionScreen = {
  category: "hpi",
  heading: "Which eye is affected?",
  directions: "Focus your gaze on the circle to make your selection",
  items: [
    {
      title: "Right Eye",
      subtext: "",
    },
    {
      title: "Left Eye",
      subtext: "",
    },
    {
      title: "Both Eyes",
      subtext: "",
    },
  ],
};

export const quality: SelectionScreen = {
  category: "hpi",
  heading: "How would you describe the issue?",
  directions: "Focus your gaze on the circle to make your selection",
  items: [
    {
      title: "Comes and Goes",
      subtext: "Symptoms are not always present",
    },
    {
      title: "Constant",
      subtext: "Symptoms are present most of the time",
    },
    {
      title: "Getting Worse",
      subtext: "Symptoms have been increasing",
    },
    {
      title: "Getting Better",
      subtext: "Symptoms have been improving",
    },
    {
      title: "Unsure",
      subtext: "Not certain how to describe it",
    },
  ],
};

export const severity: SelectionScreen = {
  category: "hpi",
  heading: "How severe is the issue?",
  directions: "Focus your gaze on the circle to make your selection",
  items: [
    {
      title: "Mild",
      subtext: "Noticeable but not disruptive",
    },
    {
      title: "Moderate",
      subtext: "Causes some difficulty during daily activities",
    },
    {
      title: "Severe",
      subtext: "Significantly affects daily activities",
    },
  ],
};

export const timing: SelectionScreen = {
  category: "hpi",
  heading: "When did the issue begin?",
  directions: "Focus your gaze on the circle to make your selection",
  items: [
    {
      title: "Today",
      subtext: "Started within the last 24 hours",
    },
    {
      title: "This Week",
      subtext: "Started within the last 7 days",
    },
    {
      title: "This Month",
      subtext: "Started within the last 30 days",
    },
    {
      title: "Several Months",
      subtext: "Present for multiple months",
    },
    {
      title: "More Than 1 Year",
      subtext: "Present for over a year",
    },
  ],
};

export const oralMedication: SelectionScreen = {
  category: "medication",
  heading: "Are These Medications Up to Date?",
  directions:
    "Please review your current medications below and confirm they are correct",
  items: [
    {
      title: "Acetazolamide 250mg",
      subtext: "Glaucoma / Eye Pressure",
      type: "oral",
    },
    {
      title: "Prednisone 5mg",
      subtext: "Eye Inflammation",
      type: "oral",
    },
    {
      title: "Montelukast 10mg",
      subtext: "Allergy Symptoms",
      type: "oral",
    },
    {
      title: "Doxycycline 50mg",
      subtext: "Blepharitis, rosacea-related eye disease",
      type: "oral",
    },
  ],
};

export const topicalMedication: SelectionScreen = {
  category: "medication",
  heading: "Are These Topical Medications Up to Date?",
  directions:
    "Please review your current medications below and confirm they are correct",
  items: [
    {
      title: "Latanoprost 0.005%",
      subtext: "Glaucoma / High Eye Pressure",
      type: "eyedrop",
    },
    {
      title: "Timolol 0.25%",
      subtext: "Glaucoma",
      type: "eyedrop",
    },
    {
      title: "Prednisolone Acetate 1%",
      subtext: "Eye Inflammation",
      type: "eyedrop",
    },
  ],
};

export const chiefComplaintsHpi: SelectionScreen[] = [
  oralMedication,
  topicalMedication,
  chiefComplaints,
  location,
  quality,
  severity,
  timing,
  chiefComplaints,
  location,
  quality,
  severity,
  timing,
];

export const medicationsList: SelectionScreen[] = [
  oralMedication,
  topicalMedication,
];

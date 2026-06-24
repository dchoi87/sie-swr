export interface SelectionOption {
  title: string;
  subtext: string;
}

export interface SelectionScreen {
  heading: string;
  directions: string;
  options: SelectionOption[];
}

export const chiefComplaints: SelectionScreen = {
  heading: "What eye issues are you experiencing today?",
  directions: "Focus your gaze on the circle to make your selection",
  options: [
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
      title: "Light Sensitivity",
      subtext: "Discomfort when exposed to light",
    },
  ],
};

export const location: SelectionScreen = {
  heading: "Which eye is affected?",
  directions: "Focus your gaze on the circle to make your selection",
  options: [
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
  heading: "How would you describe the issue?",
  directions: "Focus your gaze on the circle to make your selection",
  options: [
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
  heading: "How severe is the issue?",
  directions: "Focus your gaze on the circle to make your selection",
  options: [
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
  heading: "When did the issue begin?",
  directions: "Focus your gaze on the circle to make your selection",
  options: [
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

export const patientHistory: SelectionScreen[] = [
  chiefComplaints,
  location,
  quality,
  severity,
  timing,
];

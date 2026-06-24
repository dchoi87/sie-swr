export interface HPI {
  category: "location" | "quality" | "severity" | "timing";
  question: string;
  answers: string[];
}

export interface ChiefComplaint {
  complaint: string;
  description: string;
  hpi: HPI[];
}

export const chiefComplaints: ChiefComplaint[] = [
  {
    complaint: "Vision Change",
    description: "Changes in eyesight or visual clarity.",
    hpi: [
      {
        category: "location",
        question: "Which eye is affected?",
        answers: ["Right Eye", "Left Eye", "Both Eyes"],
      },
      {
        category: "quality",
        question: "How would you describe the vision change?",
        answers: [
          "Blurred",
          "Dim",
          "Missing Areas",
          "Distorted",
          "Difficulty Focusing",
        ],
      },
      {
        category: "severity",
        question: "How severe is the vision change?",
        answers: ["Mild", "Moderate", "Severe"],
      },
      {
        category: "timing",
        question: "When did it begin?",
        answers: [
          "Today",
          "Within 1 Week",
          "1-4 Weeks",
          "Several Months",
          "More Than 1 Year",
        ],
      },
    ],
  },

  {
    complaint: "Blurry Vision",
    description: "Vision appears unclear or out of focus.",
    hpi: [
      {
        category: "location",
        question: "Which eye is blurry?",
        answers: ["Right Eye", "Left Eye", "Both Eyes"],
      },
      {
        category: "quality",
        question: "How would you describe the blur?",
        answers: [
          "Constant",
          "Comes and Goes",
          "Near Vision Only",
          "Distance Vision Only",
          "Both Near and Distance",
        ],
      },
      {
        category: "severity",
        question: "How severe is the blurriness?",
        answers: ["Mild", "Moderate", "Severe"],
      },
      {
        category: "timing",
        question: "How long have you noticed it?",
        answers: ["Hours", "Days", "Weeks", "Months", "Years"],
      },
    ],
  },

  {
    complaint: "Eye Pain",
    description: "Pain, soreness, or discomfort in the eye.",
    hpi: [
      {
        category: "location",
        question: "Where is the pain located?",
        answers: ["Right Eye", "Left Eye", "Both Eyes", "Around the Eye"],
      },
      {
        category: "quality",
        question: "How does the pain feel?",
        answers: ["Sharp", "Dull", "Burning", "Pressure", "Throbbing"],
      },
      {
        category: "severity",
        question: "How severe is the pain?",
        answers: ["1-3", "4-6", "7-10"],
      },
      {
        category: "timing",
        question: "When does the pain occur?",
        answers: [
          "Constant",
          "Intermittent",
          "Morning",
          "Evening",
          "Only With Eye Movement",
        ],
      },
    ],
  },

  {
    complaint: "Red Eye",
    description: "Redness or irritation of the eye.",
    hpi: [
      {
        category: "location",
        question: "Which eye is red?",
        answers: ["Right Eye", "Left Eye", "Both Eyes"],
      },
      {
        category: "quality",
        question: "How would you describe the redness?",
        answers: [
          "Mild",
          "Moderate",
          "Severe",
          "With Discharge",
          "With Itching",
        ],
      },
      {
        category: "severity",
        question: "How bothersome is it?",
        answers: ["Mild", "Moderate", "Severe"],
      },
      {
        category: "timing",
        question: "How long has the redness been present?",
        answers: ["Today", "Several Days", "1-2 Weeks", "Longer"],
      },
    ],
  },

  {
    complaint: "Floaters or Flashes",
    description: "Seeing spots, floaters, or flashes of light.",
    hpi: [
      {
        category: "location",
        question: "Which eye is affected?",
        answers: ["Right Eye", "Left Eye", "Both Eyes"],
      },
      {
        category: "quality",
        question: "What are you seeing?",
        answers: [
          "Floaters",
          "Flashes",
          "Both Floaters and Flashes",
          "Curtain or Shadow",
        ],
      },
      {
        category: "severity",
        question: "How noticeable are they?",
        answers: ["Occasional", "Frequent", "Constant"],
      },
      {
        category: "timing",
        question: "When did they start?",
        answers: [
          "Today",
          "Within a Week",
          "Several Weeks Ago",
          "Several Months Ago",
        ],
      },
    ],
  },

  {
    complaint: "Dry Eye",
    description: "Dryness, irritation, or gritty sensation.",
    hpi: [
      {
        category: "location",
        question: "Which eye feels dry?",
        answers: ["Right Eye", "Left Eye", "Both Eyes"],
      },
      {
        category: "quality",
        question: "How does it feel?",
        answers: ["Dry", "Burning", "Gritty", "Foreign Body Sensation"],
      },
      {
        category: "severity",
        question: "How severe is the discomfort?",
        answers: ["Mild", "Moderate", "Severe"],
      },
      {
        category: "timing",
        question: "When do symptoms occur?",
        answers: ["All Day", "Morning", "Evening", "While Using Screens"],
      },
    ],
  },

  {
    complaint: "Double Vision",
    description: "Seeing two images instead of one.",
    hpi: [
      {
        category: "location",
        question: "Which eye is involved?",
        answers: ["Right Eye", "Left Eye", "Both Eyes", "Unsure"],
      },
      {
        category: "quality",
        question: "How would you describe it?",
        answers: [
          "Side by Side",
          "One Above the Other",
          "Intermittent",
          "Constant",
        ],
      },
      {
        category: "severity",
        question: "How disruptive is it?",
        answers: ["Mild", "Moderate", "Severe"],
      },
      {
        category: "timing",
        question: "When does it occur?",
        answers: [
          "All the Time",
          "Occasionally",
          "When Tired",
          "Only Looking Certain Directions",
        ],
      },
    ],
  },

  {
    complaint: "Light Sensitivity",
    description: "Discomfort when exposed to light.",
    hpi: [
      {
        category: "location",
        question: "Which eye is sensitive to light?",
        answers: ["Right Eye", "Left Eye", "Both Eyes"],
      },
      {
        category: "quality",
        question: "How does the light affect you?",
        answers: ["Discomfort", "Pain", "Watering", "Need to Squint"],
      },
      {
        category: "severity",
        question: "How severe is the sensitivity?",
        answers: ["Mild", "Moderate", "Severe"],
      },
      {
        category: "timing",
        question: "How often does it happen?",
        answers: [
          "Constant",
          "Intermittent",
          "Outdoors Only",
          "Bright Lights Only",
        ],
      },
    ],
  },
];

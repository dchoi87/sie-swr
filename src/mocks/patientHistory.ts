export interface DataOption {
  title: string;
  subtext: string;
  type?: string;
}

export interface MockData {
  category: string;
  heading: string;
  directions: string;
  items: DataOption[];
}

export const chiefComplaints: MockData = {
  category: "complaints",
  heading: "What brings you in today?",
  directions: "Please select from one of the choices below",
  items: [
    { title: "Vision Change", subtext: "Changes in eyesight or visual clarity" },
    { title: "Blurry Vision", subtext: "Vision appears unclear or out of focus" },
    { title: "Eye Pain", subtext: "Pain, soreness, or discomfort in the eye" },
    { title: "Red Eye", subtext: "Redness or irritation of the eye" },
    { title: "Floaters or Flashes", subtext: "Seeing spots, floaters, or flashes of light" },
    { title: "Dry Eye", subtext: "Dryness, irritation, or gritty sensation" },
    { title: "Double Vision", subtext: "Seeing two images instead of one" },
    { title: "Other", subtext: "" },
  ],
};

export const location: MockData = {
  category: "hpi",
  heading: "Which location is affected?",
  directions: "Please select from one of the choices below",
  items: [
    { title: "Right Eye", subtext: "" },
    { title: "Left Eye", subtext: "" },
    { title: "Both Eyes", subtext: "" },
  ],
};

export const quality: MockData = {
  category: "hpi",
  heading: "How would you describe the issue?",
  directions: "Please select from one of the choices below",
  items: [
    { title: "Comes and Goes", subtext: "Symptoms are not always present" },
    { title: "Constant", subtext: "Symptoms are present most of the time" },
    { title: "Getting Worse", subtext: "Symptoms have been increasing" },
    { title: "Getting Better", subtext: "Symptoms have been improving" },
    { title: "Unsure", subtext: "Not certain how to describe it" },
  ],
};

export const severity: MockData = {
  category: "hpi",
  heading: "How severe is the issue?",
  directions: "Please select from one of the choices below",
  items: [
    { title: "Mild", subtext: "Noticeable but not disruptive" },
    { title: "Moderate", subtext: "Causes some difficulty during daily activities" },
    { title: "Severe", subtext: "Significantly affects daily activities" },
  ],
};

export const timing: MockData = {
  category: "hpi",
  heading: "How long has this been going on?",
  directions: "Please select from one of the choices below",
  items: [
    { title: "Today", subtext: "Started within the last 24 hours" },
    { title: "This Week", subtext: "Started within the last 7 days" },
    { title: "This Month", subtext: "Started within the last 30 days" },
    { title: "Several Months", subtext: "Present for multiple months" },
    { title: "More Than 1 Year", subtext: "Present for over a year" },
  ],
};

export const oralMedication: MockData = {
  category: "medication",
  heading: "Is this an accurate list of your other medications?",
  directions: "Please select Correct or Incorrect",
  items: [
    { title: "Acetazolamide 250mg", subtext: "Glaucoma / Eye Pressure", type: "oral" },
    { title: "Prednisone 5mg", subtext: "Eye Inflammation", type: "oral" },
    { title: "Montelukast 10mg", subtext: "Allergy Symptoms", type: "oral" },
    {
      title: "Doxycycline 50mg",
      subtext: "Blepharitis, rosacea-related eye disease",
      type: "oral",
    },
  ],
};

export const topicalMedication: MockData = {
  category: "medication",
  heading: "Is this an accurate list of your eye medications?",
  directions: "Please select Correct or Incorrect",
  items: [
    { title: "Latanoprost 0.005%", subtext: "Glaucoma / High Eye Pressure", type: "eyedrop" },
    { title: "Timolol 0.25%", subtext: "Glaucoma", type: "eyedrop" },
    { title: "Prednisolone Acetate 1%", subtext: "Eye Inflammation", type: "eyedrop" },
  ],
};

export const pastMedicalHistory: MockData = {
  category: "patient history",
  heading: "Is this an accurate list of your medical history?",
  directions: "Please select Correct or Incorrect",
  items: [
    { title: "High blood pressure", subtext: "Cardiovascular" },
    { title: "High cholesterol", subtext: "Cardiovascular" },
    { title: "Stroke", subtext: "Neurologic" },
    { title: "Migraines", subtext: "Neurologic" },
    { title: "Diabetes", subtext: "Endocrine" },
    { title: "Thyroid disease", subtext: "Endocrine" },
    { title: "Asthma", subtext: "Pulmonary" },
    { title: "Sleep apnea", subtext: "Pulmonary" },
    { title: "GERD", subtext: "Gastrointestinal" },
    { title: "Kidney disease", subtext: "Kidney / Urologic" },
    { title: "Rheumatoid arthritis", subtext: "Rheumatologic / Autoimmune" },
    { title: "Skin cancer", subtext: "Cancer" },
    { title: "Hepatitis C", subtext: "Infectious Disease" },
    { title: "Anxiety", subtext: "Mental Health" },
    { title: "Glaucoma", subtext: "Eye Disease" },
    { title: "Cataracts", subtext: "Eye Disease" },
  ],
};

export const pastSurgicalHistory: MockData = {
  category: "patient history",
  heading: "Is this an accurate list of your surgical history?",
  directions: "Please select Correct or Incorrect",
  items: [
    { title: "Heart bypass", subtext: "Heart" },
    { title: "Coronary stents", subtext: "Heart" },
    { title: "Cataract surgery", subtext: "Eye" },
    { title: "LASIK", subtext: "Eye" },
    { title: "Back surgery", subtext: "Brain / Spine" },
    { title: "Spinal fusion", subtext: "Brain / Spine" },
    { title: "Hip replacement", subtext: "Orthopedic" },
    { title: "Knee replacement", subtext: "Orthopedic" },
    { title: "Appendectomy", subtext: "General" },
    { title: "Gallbladder removal", subtext: "General" },
    { title: "Hysterectomy", subtext: "Women's" },
    { title: "Cesarean section", subtext: "Women's" },
    { title: "Prostate surgery", subtext: "Urologic" },
    { title: "Kidney surgery", subtext: "Urologic" },
  ],
};

export const familyHistory: MockData = {
  category: "patient history",
  heading: "Is this an accurate list of your family history?",
  directions: 'Please select "Correct" or "Incorrect"',
  items: [
    { title: "Glaucoma", subtext: "Eye Disease" },
    { title: "Macular degeneration", subtext: "Eye Disease" },
  ],
};

export const socialHistory: MockData = {
  category: "patient history",
  heading: "Is this an accurate list of your social history?",
  directions: 'Please select "Correct" or "Incorrect"',
  items: [
    { title: "Former smoker", subtext: "Tobacco" },
    { title: "Current smoker", subtext: "Tobacco" },
    { title: "Cigarettes", subtext: "Tobacco" },
    { title: "Vaping", subtext: "Tobacco" },
    { title: "Smokeless tobacco", subtext: "Tobacco" },
    { title: "Occasionally", subtext: "Alcohol" },
    { title: "Weekly", subtext: "Alcohol" },
    { title: "Daily", subtext: "Alcohol" },
    { title: "Recently quit", subtext: "Alcohol" },
  ],
};

export const reviewOfSystems: MockData = {
  category: "patient history",
  heading: "Review of Systems",
  directions: "Please review the following and confirm they are correct",
  items: [
    { title: "Fatigue", subtext: "Constitutional" },
    { title: "Weight loss", subtext: "Constitutional" },
    { title: "Hearing loss", subtext: "ENT" },
    { title: "Nasal congestion", subtext: "ENT" },
    { title: "Chest pain", subtext: "Cardiovascular" },
    { title: "Palpitations", subtext: "Cardiovascular" },
    { title: "Cough", subtext: "Respiratory" },
    { title: "Shortness of breath", subtext: "Respiratory" },
    { title: "Nausea", subtext: "Gastrointestinal" },
    { title: "Constipation", subtext: "Gastrointestinal" },
    { title: "Frequent urination", subtext: "Genitourinary" },
    { title: "Joint pain", subtext: "Musculoskeletal" },
    { title: "Rash", subtext: "Skin" },
    { title: "Headaches", subtext: "Neurologic" },
    { title: "Anxiety", subtext: "Psychiatric" },
    { title: "Easy bruising", subtext: "Hematologic" },
  ],
};

export const patientHistoryData: MockData[] = [
  topicalMedication,
  oralMedication,
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
  pastMedicalHistory,
  pastSurgicalHistory,
  familyHistory,
  socialHistory,
  reviewOfSystems,
];

export interface Destination {
  id: string;
  name: string;
  slug: string;
  flag: string;
  tuitionRange: string;
  livingCostRange: string;
  scholarshipsAvailable: string;
  workStudyTerms: string;
  tagline: string;
  imageTheme: string; // Theme description or Unsplash dynamic image
  countryOverview: string;
  coreAdvantages: string[];
  averageTuitionTable: { program: string; cost: string }[];
  livingCostIndex: { item: string; cost: string }[];
  postStudyParameters: string;
  topAcademicUnits: string[];
  faqs: { question: string; answer: string }[];
}

export interface Scholarship {
  id: string;
  title: string;
  country: string;
  type: 'merit' | 'need' | 'destination';
  coverage: string;
  eligibility: string;
  deadline: string;
  description: string;
}

export interface SuccessStory {
  id: string;
  studentName: string;
  fromCity: string;
  targetCountry: string;
  universityAdmitted: string;
  program: string;
  gradesMetric: string; // e.g., CGPA 3.8 / A-Levels 3As
  testScoreMetric: string; // e.g., IELTS 7.5 / PTE 68
  visaTimeDays: number;
  testimony: string;
  avatarUrl: string;
  visaStatus: 'Approved' | 'Issued';
}

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  qualification: string;
  destination: string;
  message: string;
}

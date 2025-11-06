export interface CandidateProfile {
  userId: string;
  headline: string;           // e.g. "Junior Java Developer"
  about: string;              // Bio
  skills: string[];
  experience: Experience[];
  education: Education[];
  jobPreferences?: JobPreferences;
}

export interface Experience {
  title: string;
  company?: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate?: string;
}

export interface JobPreferences {
  jobType?: 'Internship' | 'Full-time' | 'Remote' | 'Hybrid';
  preferredLocation?: string;
  expectedSalaryRange?: string;
}

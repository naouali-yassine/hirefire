export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Remote' | 'Hybrid' | 'Internship';
  description: string;
  requiredSkills: string[];
  postedAt: Date;
}

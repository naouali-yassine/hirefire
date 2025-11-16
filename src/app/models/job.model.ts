/**
 * Job Model - Following MEAN Stack architecture
 * Centralized data model for job entities
 */

export interface Job {
  id?: string;
  title: string;
  company: string;
  location: string;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  requirements: string[];
  techStack?: string[];
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  experienceLevel: 'junior' | 'mid' | 'senior' | 'lead';
  postedDate?: Date;
  expiryDate?: Date;
  status?: 'active' | 'closed' | 'draft';
}

export interface JobApplication {
  id?: string;
  jobId: string;
  userId: string;
  status: 'pending' | 'accepted' | 'rejected' | 'interview';
  appliedDate: Date;
  cvUrl?: string;
  coverLetter?: string;
}

export interface JobMatch {
  job: Job;
  matchScore: number;
  matchReasons: string[];
}

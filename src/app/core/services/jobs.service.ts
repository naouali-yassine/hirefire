import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { BackendConfig } from '../config/backend.config';

/**
 * JobsService - Singleton service for job-related operations
 * Following MEAN Stack architecture: placed in CoreModule
 * Handles all job data operations and API calls to Spring Boot backend
 */
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private api: ApiService) {}

  /**
   * Get all jobs - Calls Spring Boot /api/jobs endpoint
   */
  getJobs(): Observable<any[]> {
    return this.api.get<any[]>(BackendConfig.endpoints.jobs.list);
  }

  /**
   * Get job by ID - Calls Spring Boot /api/jobs/:id endpoint
   */
  getJobById(id: string): Observable<any> {
    const endpoint = BackendConfig.endpoints.jobs.detail.replace(':id', id);
    return this.api.get<any>(endpoint);
  }

  /**
   * Search jobs - Calls Spring Boot /api/jobs/search endpoint
   */
  searchJobs(query: string): Observable<any[]> {
    return this.api.get<any[]>(`${BackendConfig.endpoints.jobs.search}?q=${query}`);
  }

  /**
   * Get job recommendations - Calls Spring Boot /api/jobs/recommendations endpoint
   */
  getRecommendations(): Observable<any[]> {
    return this.api.get<any[]>(BackendConfig.endpoints.jobs.recommendations);
  }

  /**
   * Apply to job - Calls Spring Boot /api/jobs/:id/apply endpoint
   */
  applyToJob(id: string, applicationData: any): Observable<any> {
    const endpoint = BackendConfig.endpoints.jobs.apply.replace(':id', id);
    return this.api.post<any>(endpoint, applicationData);
  }

  /**
   * Swipe action on job - Calls Spring Boot /api/jobs/swipe endpoint
   */
  swipeJob(jobId: string, action: 'like' | 'dislike'): Observable<any> {
    return this.api.post<any>(BackendConfig.endpoints.jobs.swipe, { jobId, action });
  }

  /**
   * Create job (admin/employer) - Calls Spring Boot /api/jobs endpoint
   */
  createJob(job: any): Observable<any> {
    return this.api.post<any>(BackendConfig.endpoints.jobs.list, job);
  }

  /**
   * Update job - Calls Spring Boot /api/jobs/:id endpoint
   */
  updateJob(id: string, job: any): Observable<any> {
    const endpoint = BackendConfig.endpoints.jobs.detail.replace(':id', id);
    return this.api.put<any>(endpoint, job);
  }

  /**
   * Delete job - Calls Spring Boot /api/jobs/:id endpoint
   */
  deleteJob(id: string): Observable<any> {
    const endpoint = BackendConfig.endpoints.jobs.detail.replace(':id', id);
    return this.api.delete<any>(endpoint);
  }
}

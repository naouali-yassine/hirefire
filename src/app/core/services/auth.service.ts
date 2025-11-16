import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { BackendConfig } from '../config/backend.config';

/**
 * AuthService - Singleton service for authentication
 * Following MEAN Stack architecture: placed in CoreModule
 * Manages user authentication state and connects to Spring Boot backend
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private api: ApiService) {
    // Check if user is already logged in (from localStorage)
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('authToken');
      this.isAuthenticatedSubject.next(!!token);
    }
  }

  /**
   * Login - Calls Spring Boot /api/auth/login endpoint
   * Expected request: { email: string, password: string }
   * Expected response: { token: string, user: any }
   */
  login(email: string, password: string): Observable<any> {
    return this.api.post(BackendConfig.endpoints.auth.login, { email, password })
      .pipe(
        tap((response: any) => {
          // Store token from Spring Boot response
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('userEmail', email);
            this.isAuthenticatedSubject.next(true);
          }
        })
      );
  }

  /**
   * Signup - Calls Spring Boot /api/auth/signup endpoint
   * Expected request: { userName: string, email: string, password: string }
   * Expected response: { token: string, user: any }
   */
  signup(userData: any): Observable<any> {
    return this.api.post(BackendConfig.endpoints.auth.signup, userData)
      .pipe(
        tap((response: any) => {
          // Store token from Spring Boot response
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('userEmail', userData.email);
            this.isAuthenticatedSubject.next(true);
          }
        })
      );
  }

  /**
   * Logout - Calls Spring Boot /api/auth/logout endpoint
   */
  logout(): Observable<any> {
    // Clear local storage and auth state immediately
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('signupUser');
    }
    this.isAuthenticatedSubject.next(false);
    
    // Try to call backend logout, but don't wait for it
    // If backend is not running, return immediately
    return new Observable(observer => {
      // Complete immediately for instant logout
      observer.next({ success: true });
      observer.complete();
      
      // Call backend in background (fire and forget)
      this.api.post(BackendConfig.endpoints.auth.logout, {}).subscribe({
        next: () => console.log('Backend logout successful'),
        error: () => console.log('Backend logout failed (backend not running)')
      });
    });
  }

  /**
   * Check if user is logged in
   */
  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  /**
   * Get authentication token
   */
  getToken(): string | null {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  /**
   * Validate token with Spring Boot backend
   */
  validateToken(): Observable<any> {
    return this.api.get(BackendConfig.endpoints.auth.validate);
  }

  /**
   * Set authentication state manually (for development mode)
   */
  setAuthState(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
}

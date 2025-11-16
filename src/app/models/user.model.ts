/**
 * User Model - Following MEAN Stack architecture
 * Centralized data model for user entities
 */

export interface User {
  id?: string;
  userName: string;
  email: string;
  password?: string; // Optional for security - don't send to frontend
  role?: 'candidate' | 'employer' | 'admin';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  userName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  message?: string;
}

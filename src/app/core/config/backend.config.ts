/**
 * Backend Configuration for Spring Boot Integration
 * Following MEAN Stack architecture pattern
 * 
 * Update these values based on your Spring Boot application settings
 */

export const BackendConfig = {
  // Spring Boot API Base URL
  // Development: Usually http://localhost:8080
  // Production: Your deployed backend URL
  apiUrl: 'http://localhost:8080/api',

  // API Endpoints - Map to your Spring Boot @RestController mappings
  endpoints: {
    // Authentication endpoints
    auth: {
      login: '/auth/login',
      signup: '/auth/signup',
      logout: '/auth/logout',
      refresh: '/auth/refresh-token',
      validate: '/auth/validate'
    },

    // User endpoints
    users: {
      profile: '/users/profile',
      update: '/users/profile',
      uploadCv: '/users/cv/upload',
      getCv: '/users/cv'
    },

    // Job endpoints
    jobs: {
      list: '/jobs',
      detail: '/jobs/:id',
      apply: '/jobs/:id/apply',
      search: '/jobs/search',
      recommendations: '/jobs/recommendations',
      swipe: '/jobs/swipe'
    },

    // Application endpoints
    applications: {
      list: '/applications',
      detail: '/applications/:id',
      withdraw: '/applications/:id/withdraw'
    }
  },

  // Request timeout in milliseconds
  timeout: 30000,

  // Retry configuration
  retry: {
    maxAttempts: 3,
    delay: 1000
  },

  // CORS settings (if needed for dev proxy)
  cors: {
    enabled: true,
    allowedOrigins: ['http://localhost:4200']
  }
};

/**
 * Helper function to build full endpoint URL
 */
export function buildEndpoint(endpoint: string, params?: Record<string, string>): string {
  let url = BackendConfig.apiUrl + endpoint;
  
  if (params) {
    Object.keys(params).forEach(key => {
      url = url.replace(`:${key}`, params[key]);
    });
  }
  
  return url;
}

/**
 * SPRING BOOT INTEGRATION GUIDE
 * ==============================
 * 
 * This file shows how your Angular frontend connects to Spring Boot backend
 */

// ============================================================================
// 1. CONFIGURATION FILE (MAIN CONNECTION POINT)
// ============================================================================
// File: src/app/core/config/backend.config.ts
// 
// Change the apiUrl to match your Spring Boot server:
//   - Development: http://localhost:8080/api
//   - Production: https://your-domain.com/api
//
// Update endpoints to match your @RestController mappings in Spring Boot


// ============================================================================
// 2. SPRING BOOT CONTROLLER EXAMPLES
// ============================================================================
// Your Spring Boot controllers should match these endpoints:

/*
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // Return: { token: "jwt-token-here", user: {...} }
    }
    
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        // Return: { token: "jwt-token-here", user: {...} }
    }
    
    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        // Return: { message: "Logged out successfully" }
    }
    
    @GetMapping("/validate")
    public ResponseEntity<?> validateToken(@RequestHeader("Authorization") String token) {
        // Return: { valid: true, user: {...} }
    }
}

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:4200")
public class JobController {
    
    @GetMapping
    public List<Job> getAllJobs() {
        // Return list of jobs
    }
    
    @GetMapping("/{id}")
    public Job getJobById(@PathVariable Long id) {
        // Return single job
    }
    
    @PostMapping("/{id}/apply")
    public ApplicationResponse applyToJob(@PathVariable Long id, @RequestBody ApplicationRequest request) {
        // Handle job application
    }
    
    @GetMapping("/recommendations")
    public List<Job> getRecommendations(@RequestHeader("Authorization") String token) {
        // Return personalized job recommendations
    }
    
    @PostMapping("/swipe")
    public SwipeResponse handleSwipe(@RequestBody SwipeRequest request) {
        // Handle swipe action (like/dislike)
    }
}
*/


// ============================================================================
// 3. HOW TO USE IN YOUR ANGULAR COMPONENTS
// ============================================================================

/*
// Example: Login Component
import { AuthService } from '@core/services/auth.service';

constructor(private authService: AuthService) {}

onLogin() {
  this.authService.login(this.email, this.password).subscribe({
    next: (response) => {
      console.log('Login successful', response);
      this.router.navigate(['/dashboard']);
    },
    error: (error) => {
      console.error('Login failed', error);
      alert('Invalid credentials');
    }
  });
}


// Example: Jobs Component
import { JobsService } from '@core/services/jobs.service';

constructor(private jobsService: JobsService) {}

loadJobs() {
  this.jobsService.getJobs().subscribe({
    next: (jobs) => {
      this.jobs = jobs;
    },
    error: (error) => {
      console.error('Failed to load jobs', error);
    }
  });
}

applyToJob(jobId: string) {
  const applicationData = {
    cvUrl: this.userCvUrl,
    coverLetter: this.coverLetter
  };
  
  this.jobsService.applyToJob(jobId, applicationData).subscribe({
    next: (response) => {
      alert('Application submitted successfully!');
    },
    error: (error) => {
      alert('Failed to submit application');
    }
  });
}
*/


// ============================================================================
// 4. CORS CONFIGURATION IN SPRING BOOT
// ============================================================================
/*
Add this to your Spring Boot application:

@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:4200")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}

Or use @CrossOrigin annotation on controllers (shown above)
*/


// ============================================================================
// 5. JWT TOKEN HANDLING
// ============================================================================
/*
The Angular app automatically:
1. Stores JWT token from login/signup response in localStorage
2. Adds "Authorization: Bearer <token>" header to all API requests
3. Intercepts 401 errors and redirects to login

Your Spring Boot backend should:
1. Generate JWT token on successful login/signup
2. Validate token on protected endpoints
3. Return 401 for invalid/expired tokens
*/


// ============================================================================
// 6. TESTING THE CONNECTION
// ============================================================================
/*
1. Start Spring Boot backend:
   mvn spring-boot:run
   
2. Verify backend is running:
   curl http://localhost:8080/api/auth/login

3. Start Angular frontend:
   ng serve

4. Open browser:
   http://localhost:4200

5. Check browser console for API calls
6. Check Spring Boot logs for incoming requests
*/


// ============================================================================
// 7. ENVIRONMENT-SPECIFIC CONFIGURATION
// ============================================================================
/*
For different environments, you can create:

src/environments/environment.ts (development)
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};

src/environments/environment.prod.ts (production)
export const environment = {
  production: true,
  apiUrl: 'https://your-production-api.com/api'
};

Then update backend.config.ts to use:
import { environment } from '../../../environments/environment';
apiUrl: environment.apiUrl
*/

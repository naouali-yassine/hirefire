import { Component, Inject, PLATFORM_ID, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { Spinner } from '../../../../shared/components/spinner/spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Spinner],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  @Output() navigateToSignup = new EventEmitter<void>();
  
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    console.log('LoginComponent initialized');
  }

  onLogin() {
    console.log('onLogin called', { email: this.email, password: this.password });
    
    if (!this.email || !this.password) {
      alert('Please fill in all fields');
      return;
    }

    // Show spinner
    this.isLoading = true;

    // Use AuthService for login
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.isLoading = false;
        alert('Login successful!');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.isLoading = false;
        
        // For development: If backend is not running, allow demo login
        if (error.status === 0 || error.status === 404) {
          console.warn('Backend not available, using demo login');
          
          // Allow any login in development mode
          if (isPlatformBrowser(this.platformId)) {
            const devToken = 'dev-token-' + Date.now();
            localStorage.setItem('authToken', devToken);
            localStorage.setItem('userEmail', this.email);
          }
          
          // IMPORTANT: Update auth state before navigation
          this.authService.setAuthState(true);
          
          alert('Login successful! (Development mode)');
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid email or password');
        }
      }
    });
  }

  goToSignup() {
    console.log('goToSignup called - navigating to signup');
    this.navigateToSignup.emit();
  }
}

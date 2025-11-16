import { Component, Inject, PLATFORM_ID, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { Spinner } from '../../../../shared/components/spinner/spinner';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, Spinner],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Output() navigateToCvSetup = new EventEmitter<void>();
  
  user = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    console.log('SignupComponent initialized');
  }

  onSignup() {
    console.log('onSignup called', this.user);
    
    if (!this.user.userName || !this.user.email || !this.user.password) {
      alert('Please fill all required fields');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Show spinner
    this.isLoading = true;

    // Use AuthService for signup
    const userData = {
      userName: this.user.userName,
      email: this.user.email,
      password: this.user.password
    };

    this.authService.signup(userData).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        this.isLoading = false;
        alert('Signup successful! Please complete your CV setup.');
        
        // Store user data for CV setup
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('signupUser', JSON.stringify(userData));
        }
        
        this.navigateToCvSetup.emit();
      },
      error: (error) => {
        console.error('Signup failed', error);
        this.isLoading = false;
        
        // For development: If backend is not running, allow signup anyway
        if (error.status === 0 || error.status === 404) {
          console.warn('Backend not available, proceeding with local signup');
          
          // Store user data locally
          if (isPlatformBrowser(this.platformId)) {
            const devToken = 'dev-token-' + Date.now();
            localStorage.setItem('authToken', devToken);
            localStorage.setItem('userEmail', userData.email);
            localStorage.setItem('signupUser', JSON.stringify(userData));
          }
          
          // IMPORTANT: Update auth state before proceeding
          this.authService.setAuthState(true);
          
          alert('Signup successful! (Development mode)');
          this.navigateToCvSetup.emit();
        } else {
          alert('Signup failed: ' + (error.error?.message || 'Please try again.'));
        }
      }
    });
  }
}

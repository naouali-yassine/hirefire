import { Component, Inject, PLATFORM_ID, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Output() navigateToCvSetup = new EventEmitter<void>();
  
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    console.log('SignupComponent initialized');
  }

  onSignup() {
    console.log('onSignup called', this.user);
    
    if (!this.user.firstName || !this.user.lastName || !this.user.email || !this.user.password) {
      alert('Please fill all required fields');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Only access localStorage in browser
    if (isPlatformBrowser(this.platformId)) {
      // Store user data in localStorage
      const userData = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password
      };
      
      localStorage.setItem('signupUser', JSON.stringify(userData));
      console.log('Saved to localStorage:', localStorage.getItem('signupUser'));
    }
    
    alert('Signup successful!');
  
    this.navigateToCvSetup.emit();
  }
}

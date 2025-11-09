import { Component, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    console.log('LoginComponent initialized');
  }

  onLogin() {
    console.log('onLogin called', { email: this.email, password: this.password });
    
    // Only access localStorage in browser
    if (isPlatformBrowser(this.platformId)) {
      // Check stored user profile
      const storedProfile = localStorage.getItem('userProfile');
      
      if (storedProfile) {
        const profile = JSON.parse(storedProfile);
        
        if (this.email === profile.email && this.password === profile.password) {
          localStorage.setItem('currentUser', JSON.stringify(profile));
          alert('Login successful!');
          this.router.navigate(['/dashboard']);
          return;
        }
      }
      
      // Fallback to demo credentials
      if (this.email === 'admin@example.com' && this.password === '123456') {
        const demoUser = { email: this.email, role: 'admin' };
        localStorage.setItem('currentUser', JSON.stringify(demoUser));
        alert('Login successful!');
        this.router.navigate(['/dashboard']);
        return;
      }
    } else {
      // SSR: Just validate without localStorage
      if (this.email === 'admin@example.com' && this.password === '123456') {
        alert('Login successful!');
        this.router.navigate(['/dashboard']);
        return;
      }
    }
    
    alert('Invalid email or password');
  }

  goToSignup() {
    console.log('goToSignup called');
    this.router.navigate(['/auth/signup']);
  }
}

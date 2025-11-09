import { Component, OnInit, Inject, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cv-setup.component.html',
  styleUrls: ['./cv-setup.component.scss']
})
export class CvSetupComponent implements OnInit {
  cv = {
    profession: '',
    skills: '',
    experience: '',
    education: '',
    location: ''
  };

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    console.log('CvSetupComponent initialized');
  }

  ngOnInit() {
    // Only access localStorage in browser
    if (isPlatformBrowser(this.platformId)) {
      const signupData = localStorage.getItem('signupUser');
      if (!signupData) {
        alert('No signup data found. Please complete signup first.');
        this.router.navigate(['/auth/signup']);
      } else {
        console.log('Signup data found:', signupData);
      }
    }
  }

  onFinish() {
    console.log('onFinish called', this.cv);
    
    // Only access localStorage in browser
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    // Retrieve user data from localStorage
    const signupUserData = localStorage.getItem('signupUser');
    
    if (!signupUserData) {
      alert('User data not found. Please sign up first.');
      this.router.navigate(['/auth/signup']);
      return;
    }
    
    const user = JSON.parse(signupUserData);

    const fullProfile = {
      ...user,
      cv: this.cv
    };

    // Store the complete profile
    localStorage.setItem('userProfile', JSON.stringify(fullProfile));
    console.log('Full profile saved:', fullProfile);

    alert('Your profile has been created successfully!');
    
    // Clean up temporary signup data
    localStorage.removeItem('signupUser');
    
    this.router.navigate(['/auth/login']);
  }
}

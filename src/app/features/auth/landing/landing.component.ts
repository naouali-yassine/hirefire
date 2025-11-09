import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { CvSetupComponent } from '../cv-setup/cv-setup.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, LoginComponent, SignupComponent, CvSetupComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  showLoginModal = false;
  showSignupModal = false;
  showCvSetupModal = false;

  openLogin() {
    this.showLoginModal = true;
    this.showSignupModal = false;
    this.showCvSetupModal = false;
  }

  openSignup() {
    this.showSignupModal = true;
    this.showLoginModal = false;
    this.showCvSetupModal = false;
  }

  openCvSetup() {
    this.showCvSetupModal = true;
    this.showLoginModal = false;
    this.showSignupModal = false;
  }

  closeModals() {
    this.showLoginModal = false;
    this.showSignupModal = false;
    this.showCvSetupModal = false;
  }

  getStarted() {
    this.openSignup();
  }
}

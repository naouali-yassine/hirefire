import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class SignupComponent {
  user = {
    fullName: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSignup() {
    console.log('User signed up:', this.user);
    this.router.navigate(['/profile/cv-form']);
  }
}

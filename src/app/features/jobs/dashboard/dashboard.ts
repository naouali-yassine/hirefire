import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  navItems = [
    { icon: '/images/home.svg', route: '/dashboard' },
    { icon: '/images/swipe.svg', route: '/dashboard/jobs' },
    { icon: '/images/profile.svg', route: '/dashboard/profile' },
    { icon: '/images/papers.svg', route: '/dashboard/messages' },
    { icon: '/images/dashboard.svg', route: '/dashboard/settings' }
  ];

  constructor(private router: Router) {}

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }

  logout() {
  
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('signupUser');
    }
    this.router.navigate(['/auth']);
  }
}

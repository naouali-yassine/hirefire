import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

/**
 * Header Component - Smart component for navigation
 * Following MEAN Stack architecture pattern
 * Sticky header with logo and user controls
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isAuthenticated = false;
  userEmail = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Subscribe to authentication status
    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
      if (isAuth && isPlatformBrowser(this.platformId)) {
        this.userEmail = localStorage.getItem('userEmail') || 'User';
      }
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth']);
      },
      error: () => {
        // Navigate to auth even if logout API fails
        this.router.navigate(['/auth']);
      }
    });
  }
}

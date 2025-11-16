import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { filter } from 'rxjs/operators';

/**
 * HomeComponent - Main container component
 * Following MEAN Stack architecture: contains Header, Router Outlet, and Footer
 * This is the bootstrap component as per the support material architecture
 * Moved to features/home/ for consistency with feature module organization
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  showHeader = true;
  showFooter = true;

  constructor(private router: Router) {
    // Listen to route changes to conditionally show/hide header and footer
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Hide header on landing page (auth routes)
      this.showHeader = !event.url.startsWith('/auth');
      
      // Hide footer on dashboard page
      this.showFooter = !event.url.startsWith('/dashboard');
    });

    // Check initial route
    this.showHeader = !this.router.url.startsWith('/auth');
    this.showFooter = !this.router.url.startsWith('/dashboard');
  }
}

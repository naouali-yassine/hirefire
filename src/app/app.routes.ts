import { Routes } from '@angular/router';
import { PageNotFound } from './page-not-found/page-not-found';
import { AuthGuard } from './core/guards/auth.guard';

/**
 * App Routes - Following MEAN Stack architecture pattern
 * - Default redirect to auth
 * - Lazy loading for feature modules (auth and jobs)
 * - Protected routes with AuthGuard
 * - Wildcard route for 404 page (must be last)
 */
export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/jobs/jobs-module').then(m => m.JobsModule),
    canActivate: [AuthGuard] // Protected route
  },
  { path: '**', component: PageNotFound }
];

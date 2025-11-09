import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CvSetupComponent } from './cv-setup/cv-setup.component';

export const AUTH_ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'cv-setup', component: CvSetupComponent }
];

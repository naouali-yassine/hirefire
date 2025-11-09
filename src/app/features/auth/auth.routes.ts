import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CvSetupComponent } from './cv-setup/cv-setup.component';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cv-setup', component: CvSetupComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

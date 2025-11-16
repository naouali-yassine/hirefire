import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CvSetupComponent } from './cv-setup/cv-setup.component';

/**
 * AuthRoutingModule - Routing module for Auth feature
 * Following MEAN Stack architecture pattern
 * Each feature module should have its own routing module
 */
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'cv-setup', component: CvSetupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

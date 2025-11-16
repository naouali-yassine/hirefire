import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { JobsRoutingModule } from './jobs-routing-module';
import { Dashboard } from './dashboard/dashboard';

/**
 * JobsModule - Feature module for job-related features
 * Following MEAN Stack architecture:
 * - Imports SharedModule to minimize repetitive imports
 * - Uses routing module for navigation
 */
@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    JobsRoutingModule,
    Dashboard
  ]
})
export class JobsModule { }

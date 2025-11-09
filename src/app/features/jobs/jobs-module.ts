import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing-module';
import { Dashboard } from './dashboard/dashboard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JobsRoutingModule,
    Dashboard
  ]
})
export class JobsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AUTH_ROUTES) // lazy loaded routes
  ]
})
export class AuthModule {}

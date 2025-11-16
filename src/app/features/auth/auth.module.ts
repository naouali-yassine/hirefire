import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

/**
 * AuthModule - Feature module for authentication
 * Following MEAN Stack architecture:
 * - Imports SharedModule to minimize repetitive imports
 * - Uses AuthRoutingModule for feature-specific routing
 * - Lazy loaded from AppModule
 */
@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}

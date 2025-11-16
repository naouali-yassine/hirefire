import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Services
import { AuthService } from './services/auth.service';
import { JobsService } from './services/jobs.service';
import { ApiService } from './services/api.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';

/**
 * CoreModule - Singleton module for core services
 * Following MEAN Stack architecture pattern (pages 209-215)
 * 
 * Purpose:
 * - Holds singleton services (AuthService, JobsService, ApiService)
 * - Loaded only once in AppModule
 * - Provides guards and interceptors
 * - Should NOT be imported in any other module
 */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    JobsService,
    ApiService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  /**
   * Prevent CoreModule from being imported more than once
   * Following MEAN Stack architecture best practice
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}

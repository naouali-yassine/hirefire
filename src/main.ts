import { bootstrapApplication } from '@angular/platform-browser';
import { Home } from './app/features/home/home';
import { appConfig } from './app/app.config';

/**
 * Bootstrap HomeComponent as the root component
 * Following MEAN Stack architecture pattern from support material
 */
bootstrapApplication(Home, appConfig)
  .catch((err) => console.error(err));

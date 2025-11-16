import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { Home } from './app/features/home/home';
import { config } from './app/app.config.server';

/**
 * Server-side bootstrap for HomeComponent
 * Following MEAN Stack architecture pattern
 */
const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(Home, config, context);

export default bootstrap;

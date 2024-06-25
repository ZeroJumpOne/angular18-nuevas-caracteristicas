import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
   providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(
         routes,
         withViewTransitions({
            skipInitialTransition: true,
            // onViewTransitionCreated( transitionInfo ) {
            //    console.log({transitionInfo});

            // }
         })
      ),
      provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync(),
      // importProvidersFrom(
      //    HttpClientModule,
      // ),
   ]
};

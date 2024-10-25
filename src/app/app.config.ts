import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideMarkdown(
      // {
      //   markedOptions: {
      //     provide: MARKED_OPTIONS,
      //     useValue: {
      //       gfm: true,
      //       breaks: false,
      //       pedantic: false
      //     }
      //   }
      // }
    )
  ],

};

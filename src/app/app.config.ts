import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThirdComponent } from './page-third/page-third.component';

 const routes = [
  { path: 'land', component: LandingPageComponent },
  { path: 'second', component: PageTwoComponent },
  { path: 'third', component: PageThirdComponent },
];

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
// };
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
}
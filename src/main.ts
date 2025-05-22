// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { provideRouter, RouterModule } from '@angular/router';
// import { LandingPageComponent } from './app/landing-page/landing-page.component';
// import { PageTwoComponent } from './app/page-two/page-two.component';
// import { PageThirdComponent } from './app/page-third/page-third.component';

// const routes = [
//   { path: 'land', component: LandingPageComponent },
//   { path: 'second', component: PageTwoComponent },
//   { path: 'third', component: PageThirdComponent },
// ];

// // bootstrapApplication(AppComponent, appConfig)
// //   .catch((err) => console.error(err));
// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)],
// });

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
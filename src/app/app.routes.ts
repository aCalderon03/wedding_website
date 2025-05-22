import { Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThirdComponent } from './page-third/page-third.component';

export const routes: Routes = [
  { path: 'land', component: LandingPageComponent },
  { path: 'second', component: PageTwoComponent },
  { path: 'third', component: PageThirdComponent },
  { path: '**', component: LandingPageComponent },
];

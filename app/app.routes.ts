import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './modules/home.component'
const routes: RouterConfig = [
  { path: '', component: HomeComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
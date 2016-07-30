import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { CheckoutComponent } from './checkout.component';

const routes: RouterConfig = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, 
  { path: 'checkout', component: CheckoutComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
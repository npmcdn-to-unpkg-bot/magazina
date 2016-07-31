import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { CheckoutComponent } from './checkout.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductDetailComponent } from './product-detail.component';

const routes: RouterConfig = [
    { path: '', component: ProductSearchComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'sku/:id', component: ProductDetailComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
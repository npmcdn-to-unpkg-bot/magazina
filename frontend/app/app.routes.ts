import { provideRouter, RouterConfig }  from '@angular/router';

import { CheckoutComponent } from './checkout/checkout.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WikiComponent } from './wiki/wiki.component';

const routes: RouterConfig = [
    { path: '', component: ProductSearchComponent },
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'sku/:id', component: ProductDetailComponent },
    { path: 'wiki', component: WikiComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
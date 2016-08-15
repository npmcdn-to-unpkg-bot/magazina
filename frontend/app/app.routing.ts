import { Routes, RouterModule }  from '@angular/router';

import { CheckoutComponent }      from './checkout/checkout.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WikiComponent }          from './wiki/wiki.component';

const appRoutes: Routes  = [
    { path: '',         component: ProductSearchComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'sku/:id',  component: ProductDetailComponent },
    { path: 'wiki',     component: WikiComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
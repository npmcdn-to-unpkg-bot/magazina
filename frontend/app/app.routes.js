"use strict";
var router_1 = require('@angular/router');
var checkout_component_1 = require('./checkout/checkout.component');
var product_search_component_1 = require('./product-search.component');
var product_detail_component_1 = require('./product-detail/product-detail.component');
var wiki_component_1 = require('./wiki/wiki.component');
var routes = [
    { path: '', component: product_search_component_1.ProductSearchComponent },
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent },
    { path: 'sku/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'wiki', component: wiki_component_1.WikiComponent },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map
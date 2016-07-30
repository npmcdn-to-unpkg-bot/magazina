"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var checkout_component_1 = require('./checkout.component');
var routes = [
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'checkout', component: checkout_component_1.CheckoutComponent },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map
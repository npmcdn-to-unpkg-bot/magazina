"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var shoppingcart_service_1 = require('./shoppingcart.service');
var LocalStorageEmitter_1 = require('angular2-localstorage/LocalStorageEmitter');
var appPromise = platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS,
    shoppingcart_service_1.ShoppingCartService,
    LocalStorageEmitter_1.LocalStorageService,
]);
LocalStorageEmitter_1.LocalStorageSubscriber(appPromise);
//# sourceMappingURL=main.js.map
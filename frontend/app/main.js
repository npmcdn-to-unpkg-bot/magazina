"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var LocalStorageEmitter_1 = require('angular2-localstorage/LocalStorageEmitter');
//import {enableProdMode} from '@angular/core';
//enableProdMode();
var appPromise = platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
LocalStorageEmitter_1.LocalStorageSubscriber(appPromise);
//platformBrowserDynamic().bootstrapModule(AppModule); 
//# sourceMappingURL=main.js.map
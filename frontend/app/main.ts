import { bootstrap }      from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent }         from './app.component';
import { appRouterProviders }   from './app.routes';
import { ShoppingCartService } from './shoppingcart.service';
import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';

var appPromise = bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    ShoppingCartService,
    LocalStorageService,
]);

LocalStorageSubscriber(appPromise);
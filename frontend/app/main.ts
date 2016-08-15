import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import { LocalStorageSubscriber } from 'angular2-localstorage/LocalStorageEmitter';
//import {enableProdMode} from '@angular/core';

//enableProdMode();

var appPromise = platformBrowserDynamic().bootstrapModule(AppModule);

LocalStorageSubscriber(appPromise);
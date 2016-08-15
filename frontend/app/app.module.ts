import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { LocalStorageService } from 'angular2-localstorage/LocalStorageEmitter';

import { AppComponent }  from './app.component';
import { routing } from './app.routing'
import { ShoppingCartService } from './shoppingcart.service';


@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  declarations: [ AppComponent ],
  providers: [
      LocalStorageService,
      ShoppingCartService
  ],
  bootstrap: [ AppComponent ]
})


export class AppModule { }
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService } from './hero.service';
import { BagviewComponent } from './bagview.component';
import './rxjs-extensions';



@Component({
  selector: 'my-app',
  templateUrl: 'static/app/html/app.component.html',
  styleUrls: ['static/app/css/app.component.css'],
  directives: [ROUTER_DIRECTIVES, BagviewComponent],
  providers: [HeroService]
})

export class AppComponent {
    itsStartSearchLabel: boolean = false;
    
    constructor() {}

    goBack() {
        window.history.back();
    }
    
    startSearchLabel(inputElement) {
        inputElement.focus();
        this.itsStartSearchLabel = true;
    }
}
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService } from './hero.service';
import { BagviewComponent } from './bagview/bagview.component';
import './rxjs-extensions';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, BagviewComponent],
  providers: []
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
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService } from './hero.service';
import { bagviewComponent } from './bagview.component';
import './rxjs-extensions';

@Component({
  selector: 'my-app',
  templateUrl: 'static/app/html/app.component.html',
  styleUrls: ['static/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, bagviewComponent],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
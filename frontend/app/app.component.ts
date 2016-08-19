import {
  Component,
  OnInit,
  ViewChild,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import './rxjs-extensions';

import { BagviewComponent } from './bagview/bagview.component';
import { ShoppingCartService } from './shoppingcart.service';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BagviewComponent],
  animations: [
    trigger('componentState', [
      state('in-one',   style({ marginRight: '0px'   })),
      state('in-twain', style({ marginRight: '260px' })),
      transition('in-one => in-twain', animate(100)),
      transition('in-twain => in-one', animate(100)),
    ])
  ]
})


export class AppComponent implements OnInit {
  @ViewChild(BagviewComponent) bagview: BagviewComponent;

  itsStartSearchLabel: boolean = false;
  componentState: string;

  constructor(private shoppingcartService: ShoppingCartService) {
    this.shoppingcartService.productAdded$.subscribe( () => {
      if( this.shoppingcartService.isEmpty() ) this.componentState = 'in-one';
      else this.componentState = 'in-twain';
    });
  }

  ngOnInit() {
    this.componentState = (this.shoppingcartService.isEmpty() ? 'in-one' : 'in-twain');
  }
  
  goBack() {
    window.history.back();
  }

  startSearchLabel(inputElement) {
    inputElement.focus();
    this.itsStartSearchLabel = true;
  }

  showHideShoppingCart() {
    this.bagviewSwitch = !this.bagviewSwitch;
    this.bagview.bagviewSwitch = !this.bagview.bagviewSwitch;
  }
}
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  ViewChild,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import {TOOLTIP_DIRECTIVES} from "ng2-tooltip";

import { Product } from '../product';
import { ShoppingCartService } from '../shoppingcart.service';


@Component({
  moduleId: module.id,
  selector: 'bagview',
  templateUrl: 'bagview.component.html',
  styleUrls: ['bagview.component.css'],
  directives: [TOOLTIP_DIRECTIVES],
  animations: [
    trigger('bagiewState', [
      transition('void => *', animate(100, style({transform: 'translateX(0)'}))),
      transition('* => void', animate(100, style({transform: 'translateX(100%)'}))),
    ])
  ]
})


export class BagviewComponent implements OnInit, AfterViewInit {
  private products: Product[];
  private itsTotal: number;

  constructor(
    private router: Router,
    private shoppingcartService: ShoppingCartService){
    this.shoppingcartService.productAdded$.subscribe( () => {
      this.products = this.shoppingcartService.getProducts(); // оптимизировать

      if( this.shoppingcartService.isEmpty() ) this.hidden = true;
      else this.hidden = false;

      this.recalculate();
    });
  }

  ngAfterViewInit() {
      //$(".nano").nanoScroller();
    console.log('+', $(".nano"))
  }

  ngAfterContentInit(){
    console.log('+', $(".nano"))
  }

  ngOnInit() {
    this.products = this.shoppingcartService.getProducts();

    this.recalculate();
    this.hidden = this.shoppingcartService.isEmpty();
  }

  remove(product: Product, event: any) {
    event.stopPropagation();
    this.shoppingcartService.remove(product.id);
    this.products = this.shoppingcartService.getProducts();
  }

  gotoDetail(product: Product) {
    this.router.navigate(['/sku', product.id]);
  }

  recalculate() {
    this.itsTotal = this.shoppingcartService.getTotal();
  }

  showHideScrollbar(event) {
    var wrapper = document.getElementById("content");

    if (event.type == 'mouseover' && scrollbarVisible('html')) {
        document.body.style.overflow = "hidden";

        wrapper.style.transition = "none";
        event.currentTarget.style.transition = "none";

        wrapper.style.marginRight = 260 + getScrollbarWidth() + "px";
        event.currentTarget.style.right = getScrollbarWidth() + "px";
    }
    else {
        document.body.style.overflow = null;

        wrapper.style.marginRight = null;
        event.target.style.right = null;

        wrapper.style.transition = null;
        event.currentTarget.style.transition = null;
    }
  }
}

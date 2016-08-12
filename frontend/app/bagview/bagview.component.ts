import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Product } from '../product';
import { ShoppingCartService } from '../shoppingcart.service';

@Component({
    moduleId: module.id,
    selector: 'bagview',
    templateUrl: 'bagview.component.html',
    styleUrls: ['bagview.component.css'],
    providers: [],
    directives: [ROUTER_DIRECTIVES],
})

export class BagviewComponent implements OnInit, AfterViewInit {
    private products: Product[];
    private shoppingCartIsNotEmpty: boolean;
    private itsTotal: number;

    constructor(
        private router: Router,
        private shoppingcartService: ShoppingCartService) {
    }

    ngAfterViewInit() {
        $(".nano").nanoScroller();
    }

    ngOnInit() {
        this.products = this.shoppingcartService.getProducts();
        this.shoppingCartIsNotEmpty = !this.shoppingcartService.isEmpty();
        this.recalculate();
    }

    show() {
        this.shoppingCartIsNotEmpty = true;
    }

    hide() {
        this.shoppingCartIsNotEmpty = false;
    }
    
    remove(product: Product, event: any) {
        event.stopPropagation();
        this.shoppingcartService.remove(product.id);
        this.products = this.shoppingcartService.getProducts();
        if (this.shoppingcartService.isEmpty()) {
            this.shoppingCartIsNotEmpty = false;
        }

    }

    gotoDetail(product: Product) {
        this.router.navigate(['/sku', product.id]);
    }

    recalculate() {
        this.itsTotal = this.shoppingcartService.getTotal();
    }

    showHideScrollbar(event) {
        var wrapper = document.getElementById("wrapper");

        if (event.type == 'mouseover' && scrollbarVisible('html')) {
            document.body.style.overflow = "hidden";
            wrapper.style.right = (wrapper.offsetLeft + getScrollbarWidth()) + "px";
            event.currentTarget.style.right = getScrollbarWidth() + "px";
        }
        else {
            document.body.style.overflow = "inherit";
            wrapper.style.right = wrapper.offsetLeft + "px";
            event.target.style.right = "8px";
        }
    }
}

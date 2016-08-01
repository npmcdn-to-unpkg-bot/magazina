import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from './product';

@Component({
    selector: 'bagview',
    templateUrl: 'static/app/html/bagview.component.html',
    styleUrls: ['static/app/css/bagview.component.css'],
    directives: [ROUTER_DIRECTIVES],
})

export class BagviewComponent implements OnInit {
    private products: Product[];
    private total: number;
    private empty: boolean = true;

    constructor( private router: Router ) {}

    ngOnInit() {
        $(".nano").nanoScroller();
        this.products = [];
    }

    add(newProduct: Product) {
        if (this.products.find(product => product.id === newProduct.id)) {
            // Товар присутствует в корзине
            return true;
        }
        newProduct.count = 1;
        this.products.push(newProduct);
        this.empty = false;
        this.recalculate();
    }

    delete(product: Product) {
        this.products = this.products.filter(h => h !== product);
        if (this.products.length == 0) this.empty = true;
        this.recalculate();
    }

    recalculate() {
        for (let product of this.products) {
            //console.log(product);
        }
    }

    reduce(product: Product) {
        product.count -= 1;
        if (product.count === 0) this.delete(product);
    }
    
    increase(product: Product) {
        product.count += 1;
    }
    
    gotoDetail(product) {
        this.router.navigate(['/sku', product.id]);
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
            event.target.style.right = 0;
        }
    }
}

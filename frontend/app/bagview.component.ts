import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from './product';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

@Component({
    selector: 'bagview',
    templateUrl: 'static/app/html/bagview.component.html',
    styleUrls: ['static/app/css/bagview.component.css'],
    directives: [ROUTER_DIRECTIVES],
})

export class BagviewComponent implements OnInit {
    @LocalStorage() private products: Product[];
    private total: number;
    private empty: boolean = true;

    constructor( private router: Router ) {}

    ngOnInit() {
        $(".nano").nanoScroller();
        if (this.products.length > 0) this.empty = false;
    }

    add(product: Product) {
        // Товар присутствует в корзине
        if (this.contains(product.id)) return true;

        this.products.push(product);
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

    get(id: number) {
        return this.products.find(product => product.id === id)
    }

    contains(id: number) {
        return this.products.find(product => product.id === id) ? true : false;
    }

    increase(product: Product) {
        this.get(product.id).count += 1;
    }

    decrease(product: Product) {
        let p = this.get(product.id);
        p.count -= 1;
        if (p.count === 0) this.delete(p);
    }
    
    gotoDetail(product: Product) {
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

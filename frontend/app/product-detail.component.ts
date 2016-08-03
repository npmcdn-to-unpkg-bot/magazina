import { Component, EventEmitter, Input, OnInit, OnDestroy, Output, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import { BagviewComponent } from './bagview.component'
import { Product } from './product';
import { ShoppingCartService } from './shoppingcart.service';

@Component({
    selector: 'my-product-detail',
    templateUrl: 'static/app/html/product-detail.component.html',
    styleUrls: ['static/app/css/product-detail.component.css'],
    providers: [SearchService],
    directives: [BagviewComponent]
})

export class ProductDetailComponent implements OnInit, AfterViewInit {
    @ViewChild(BagviewComponent) bagview: BagviewComponent;
    @Input() product: Product;
    full: boolean;
    
    constructor(
        private route: ActivatedRoute,
        private searchService: SearchService,
        private shoppingcartService: ShoppingCartService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] === undefined)  return true;
            let id = +params['id'];

            this.searchService.getProduct(id).then(product => {

                if (this.shoppingcartService.contains(product.id)) {
                    this.product = this.shoppingcartService.get(product.id);
                    this.product.loaded = product;
                    this.full = true;
                }
                else {
                    this.product = product;
                    this.full = false;

                }
            });
        });

    }

    ngAfterViewInit() {
        // Use _alert
        //console.log(this.bagview)
    }

    addToCart() {
        if (this.shoppingcartService.isEmpty())
            this.bagview.show();
        
        this.shoppingcartService.add(this.product);
        this.bagview.recalculate();
        this.full = true;
    }

    changeCount(){

    }

    increase() {
        this.product.count += 1;
        this.bagview.recalculate();
    }

    decrease() {
        this.product.count -= 1;
        this.bagview.recalculate();

        if (this.product.count == 0) {
            this.shoppingcartService.remove(this.product.id);
            this.full = false;
        }
        
        if (this.shoppingcartService.isEmpty())
            this.bagview.hide();
    }
}

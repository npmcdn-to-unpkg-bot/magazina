import { Component, EventEmitter, Input, OnInit, OnDestroy, Output, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import { BagviewComponent } from './bagview.component'
import { Product } from './product';

@Component({
    selector: 'my-product-detail',
    templateUrl: 'static/app/html/product-detail.component.html',
    providers: [SearchService],
    directives: [BagviewComponent]
})

export class ProductDetailComponent implements OnInit, AfterViewInit {
    @ViewChild(BagviewComponent) bagview: BagviewComponent;
    @Input() product: Product;
    full: boolean;
    
    constructor(
        private route: ActivatedRoute,
        private searchService: SearchService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] === undefined)  return true;
            let id = +params['id'];

            this.searchService.getProduct(id).then(product => {
                this.product = product;
                let foundProduct = this.bagview.get(product.id);
                if (foundProduct) {
                    this.product.count = foundProduct.count;
                    this.full = true;
                }
                else {
                    this.full = false;
                }
            });
            console.log()


        });

    }

    ngAfterViewInit() {
        // Use _alert
        //console.log(this.bagview)
    }

    addToCart() {
        this.product.count = 1;
        this.bagview.add(this.product);

        this.full = true;
    }

    increase() {
        console.log(this.product)
        this.bagview.increase(this.product);
        console.log(this.product)
        this.product.count += 1;
        console.log(this.product)
    }

    decrease() {
        if (this.product.count == 1) this.full = false;

        console.log(this.product)
        this.bagview.decrease(this.product);
        this.product.count -= 1;
    }
}

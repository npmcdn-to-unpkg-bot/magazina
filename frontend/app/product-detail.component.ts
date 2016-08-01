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
            this.searchService.getProduct(id).then(product => this.product = product);
            console.log(this.product)
        });
        this.full = false;
    }

    ngAfterViewInit() {
        // Use _alert
        //console.log(this.bagview)
    }

    addToCart() {
        this.bagview.add(this.product);
        this.full = true;
    }

    reduce() {
        if (this.product.count == 1) {
            this.full = false;
        }
        this.bagview.reduce(this.product);
    }

    increase() {
        this.bagview.increase(this.product);
    }
}

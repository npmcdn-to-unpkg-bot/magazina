import { Component, EventEmitter, Input, OnInit, OnDestroy, Output, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import { BagviewComponent } from './bagview.component'

@Component({
  selector: 'my-product-detail',
  templateUrl: 'static/app/html/product-detail.component.html',
  providers: [SearchService],
  directives: [BagviewComponent]
})

export class ProductDetailComponent implements OnInit, AfterViewInit {
  @ViewChild(BagviewComponent) bagview: BagviewComponent;
  @Input() product: any;

  constructor(
      private route: ActivatedRoute,
      private searchService: SearchService) {
  }

  ngOnInit() {
      this.route.params.subscribe(params => {
        if (params['id'] !== undefined) {
          let id = +params['id'];
          this.searchService.getProduct(id).then(product => this.product = product);
            console.log(this.bagview)
        } else {

        }
      });
  }

  ngAfterViewInit() {
    // Use _alert
      console.log(this.bagview)
  }

  addToCart(id) {
    this.bagview.products.push({id: 1, name: '13'})
  }


}

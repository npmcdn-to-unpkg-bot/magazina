import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService } from './hero.service';
import { BagviewComponent } from './bagview.component';
import { SearchService } from './search.service';

@Component({
  moduleId: module.id,
  selector: 'my-product-search',
  templateUrl: 'product-search.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [SearchService]
})

export class ProductSearchComponent implements OnInit {
  title = 'Tour of Heroes';
  products = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getResults().then(products => this.products = products);
  }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var search_service_1 = require('./search.service');
var bagview_component_1 = require('./bagview.component');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, searchService) {
        this.route = route;
        this.searchService = searchService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id'] === undefined)
                return true;
            var id = +params['id'];
            _this.searchService.getProduct(id).then(function (product) {
                _this.product = product;
                var foundProduct = _this.bagview.get(product.id);
                if (foundProduct) {
                    _this.product.count = foundProduct.count;
                    _this.full = true;
                }
                else {
                    _this.full = false;
                }
            });
            console.log();
        });
    };
    ProductDetailComponent.prototype.ngAfterViewInit = function () {
        // Use _alert
        //console.log(this.bagview)
    };
    ProductDetailComponent.prototype.addToCart = function () {
        this.product.count = 1;
        this.bagview.add(this.product);
        this.full = true;
    };
    ProductDetailComponent.prototype.increase = function () {
        console.log(this.product);
        this.bagview.increase(this.product);
        console.log(this.product);
        this.product.count += 1;
        console.log(this.product);
    };
    ProductDetailComponent.prototype.decrease = function () {
        if (this.product.count == 1)
            this.full = false;
        console.log(this.product);
        this.bagview.decrease(this.product);
        this.product.count -= 1;
    };
    __decorate([
        core_1.ViewChild(bagview_component_1.BagviewComponent), 
        __metadata('design:type', bagview_component_1.BagviewComponent)
    ], ProductDetailComponent.prototype, "bagview", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductDetailComponent.prototype, "product", void 0);
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-product-detail',
            templateUrl: 'static/app/html/product-detail.component.html',
            providers: [search_service_1.SearchService],
            directives: [bagview_component_1.BagviewComponent]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, search_service_1.SearchService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map
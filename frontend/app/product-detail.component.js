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
var shoppingcart_service_1 = require('./shoppingcart.service');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, searchService, shoppingcartService) {
        this.route = route;
        this.searchService = searchService;
        this.shoppingcartService = shoppingcartService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id'] === undefined)
                return true;
            var id = +params['id'];
            _this.searchService.getProduct(id).then(function (product) {
                if (_this.shoppingcartService.contains(product.id)) {
                    _this.product = _this.shoppingcartService.get(product.id);
                    _this.product.loaded = product;
                    _this.full = true;
                }
                else {
                    _this.product = product;
                    _this.full = false;
                }
            });
        });
    };
    ProductDetailComponent.prototype.ngAfterViewInit = function () {
        // Use _alert
        //console.log(this.bagview)
    };
    ProductDetailComponent.prototype.addToCart = function () {
        if (this.shoppingcartService.isEmpty())
            this.bagview.show();
        this.shoppingcartService.add(this.product);
        this.bagview.recalculate();
        this.full = true;
    };
    ProductDetailComponent.prototype.changeCount = function () {
    };
    ProductDetailComponent.prototype.increase = function () {
        this.product.count += 1;
        this.bagview.recalculate();
    };
    ProductDetailComponent.prototype.decrease = function () {
        this.product.count -= 1;
        this.bagview.recalculate();
        if (this.product.count == 0) {
            this.shoppingcartService.remove(this.product.id);
            this.full = false;
        }
        if (this.shoppingcartService.isEmpty())
            this.bagview.hide();
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
            styleUrls: ['static/app/css/product-detail.component.css'],
            providers: [search_service_1.SearchService],
            directives: [bagview_component_1.BagviewComponent]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, search_service_1.SearchService, shoppingcart_service_1.ShoppingCartService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map
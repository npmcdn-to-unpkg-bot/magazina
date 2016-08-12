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
var router_2 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var shoppingcart_service_1 = require('../shoppingcart.service');
var BagviewComponent = (function () {
    function BagviewComponent(router, shoppingcartService) {
        this.router = router;
        this.shoppingcartService = shoppingcartService;
    }
    BagviewComponent.prototype.ngAfterViewInit = function () {
        $(".nano").nanoScroller();
    };
    BagviewComponent.prototype.ngOnInit = function () {
        this.products = this.shoppingcartService.getProducts();
        this.shoppingCartIsNotEmpty = !this.shoppingcartService.isEmpty();
        this.recalculate();
    };
    BagviewComponent.prototype.show = function () {
        this.shoppingCartIsNotEmpty = true;
    };
    BagviewComponent.prototype.hide = function () {
        this.shoppingCartIsNotEmpty = false;
    };
    BagviewComponent.prototype.remove = function (product, event) {
        event.stopPropagation();
        this.shoppingcartService.remove(product.id);
        this.products = this.shoppingcartService.getProducts();
        if (this.shoppingcartService.isEmpty()) {
            this.shoppingCartIsNotEmpty = false;
        }
    };
    BagviewComponent.prototype.gotoDetail = function (product) {
        this.router.navigate(['/sku', product.id]);
    };
    BagviewComponent.prototype.recalculate = function () {
        this.itsTotal = this.shoppingcartService.getTotal();
    };
    BagviewComponent.prototype.showHideScrollbar = function (event) {
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
    };
    BagviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bagview',
            templateUrl: 'bagview.component.html',
            styleUrls: ['bagview.component.css'],
            providers: [],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [router_2.Router, shoppingcart_service_1.ShoppingCartService])
    ], BagviewComponent);
    return BagviewComponent;
}());
exports.BagviewComponent = BagviewComponent;
//# sourceMappingURL=bagview.component.js.map
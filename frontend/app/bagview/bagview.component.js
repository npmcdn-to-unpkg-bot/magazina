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
require('rxjs/add/operator/toPromise');
var router_1 = require('@angular/router');
var ng2_tooltip_1 = require("ng2-tooltip");
var shoppingcart_service_1 = require('../shoppingcart.service');
var BagviewComponent = (function () {
    function BagviewComponent(router, shoppingcartService) {
        var _this = this;
        this.router = router;
        this.shoppingcartService = shoppingcartService;
        this.shoppingcartService.productAdded$.subscribe(function () {
            _this.products = _this.shoppingcartService.getProducts(); // оптимизировать
            if (_this.shoppingcartService.isEmpty())
                _this.hidden = true;
            else
                _this.hidden = false;
            _this.recalculate();
        });
    }
    BagviewComponent.prototype.ngAfterViewInit = function () {
        //$(".nano").nanoScroller();
        console.log('+', $(".nano"));
    };
    BagviewComponent.prototype.ngAfterContentInit = function () {
        console.log('+', $(".nano"));
    };
    BagviewComponent.prototype.ngOnInit = function () {
        this.products = this.shoppingcartService.getProducts();
        this.recalculate();
        this.hidden = this.shoppingcartService.isEmpty();
    };
    BagviewComponent.prototype.remove = function (product, event) {
        event.stopPropagation();
        this.shoppingcartService.remove(product.id);
        this.products = this.shoppingcartService.getProducts();
    };
    BagviewComponent.prototype.gotoDetail = function (product) {
        this.router.navigate(['/sku', product.id]);
    };
    BagviewComponent.prototype.recalculate = function () {
        this.itsTotal = this.shoppingcartService.getTotal();
    };
    BagviewComponent.prototype.showHideScrollbar = function (event) {
        var wrapper = document.getElementById("content");
        if (event.type == 'mouseover' && scrollbarVisible('html')) {
            document.body.style.overflow = "hidden";
            wrapper.style.transition = "none";
            event.currentTarget.style.transition = "none";
            wrapper.style.marginRight = 260 + getScrollbarWidth() + "px";
            event.currentTarget.style.right = getScrollbarWidth() + "px";
        }
        else {
            document.body.style.overflow = null;
            wrapper.style.marginRight = null;
            event.target.style.right = null;
            wrapper.style.transition = null;
            event.currentTarget.style.transition = null;
        }
    };
    BagviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bagview',
            templateUrl: 'bagview.component.html',
            styleUrls: ['bagview.component.css'],
            directives: [ng2_tooltip_1.TOOLTIP_DIRECTIVES],
            animations: [
                core_1.trigger('bagiewState', [
                    core_1.transition('void => *', core_1.animate(100, core_1.style({ transform: 'translateX(0)' }))),
                    core_1.transition('* => void', core_1.animate(100, core_1.style({ transform: 'translateX(100%)' }))),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, shoppingcart_service_1.ShoppingCartService])
    ], BagviewComponent);
    return BagviewComponent;
}());
exports.BagviewComponent = BagviewComponent;
//# sourceMappingURL=bagview.component.js.map
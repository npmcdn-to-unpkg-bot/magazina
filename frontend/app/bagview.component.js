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
var BagviewComponent = (function () {
    function BagviewComponent(router) {
        this.router = router;
        this.empty = true;
    }
    BagviewComponent.prototype.ngOnInit = function () {
        $(".nano").nanoScroller();
        this.products = [];
    };
    BagviewComponent.prototype.add = function (newProduct) {
        if (this.products.find(function (product) { return product.id === newProduct.id; })) {
            // Товар присутствует в корзине
            return true;
        }
        newProduct.count = 1;
        this.products.push(newProduct);
        this.empty = false;
        this.recalculate();
    };
    BagviewComponent.prototype.delete = function (product) {
        this.products = this.products.filter(function (h) { return h !== product; });
        if (this.products.length == 0)
            this.empty = true;
        this.recalculate();
    };
    BagviewComponent.prototype.recalculate = function () {
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
        }
    };
    BagviewComponent.prototype.reduce = function (product) {
        product.count -= 1;
        if (product.count === 0)
            this.delete(product);
    };
    BagviewComponent.prototype.increase = function (product) {
        product.count += 1;
    };
    BagviewComponent.prototype.gotoDetail = function (product) {
        this.router.navigate(['/sku', product.id]);
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
            event.target.style.right = 0;
        }
    };
    BagviewComponent = __decorate([
        core_1.Component({
            selector: 'bagview',
            templateUrl: 'static/app/html/bagview.component.html',
            styleUrls: ['static/app/css/bagview.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [router_2.Router])
    ], BagviewComponent);
    return BagviewComponent;
}());
exports.BagviewComponent = BagviewComponent;
//# sourceMappingURL=bagview.component.js.map
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
var WebStorage_1 = require("angular2-localstorage/WebStorage");
var BagviewComponent = (function () {
    function BagviewComponent(router) {
        this.router = router;
        this.empty = true;
    }
    BagviewComponent.prototype.ngOnInit = function () {
        $(".nano").nanoScroller();
        if (this.products.length > 0)
            this.empty = false;
    };
    BagviewComponent.prototype.add = function (product) {
        // Товар присутствует в корзине
        if (this.contains(product.id))
            return true;
        this.products.push(product);
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
    BagviewComponent.prototype.get = function (id) {
        return this.products.find(function (product) { return product.id === id; });
    };
    BagviewComponent.prototype.contains = function (id) {
        return this.products.find(function (product) { return product.id === id; }) ? true : false;
    };
    BagviewComponent.prototype.increase = function (product) {
        this.get(product.id).count += 1;
    };
    BagviewComponent.prototype.decrease = function (product) {
        var p = this.get(product.id);
        p.count -= 1;
        if (p.count === 0)
            this.delete(p);
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
    __decorate([
        WebStorage_1.LocalStorage(), 
        __metadata('design:type', Array)
    ], BagviewComponent.prototype, "products", void 0);
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
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
var Subject_1 = require('rxjs/Subject');
var ShoppingCartService = (function () {
    function ShoppingCartService() {
        this.products = [];
        this.missionAnnouncedSource = new Subject_1.Subject();
        this.productAdded$ = this.missionAnnouncedSource.asObservable();
    }
    ShoppingCartService.prototype.getProducts = function () {
        return this.products;
    };
    ShoppingCartService.prototype.add = function (product) {
        if (this.contains(product.id)) {
            console.error("ShoppingCartService.add(): Товар имеется в корзине!");
            return false;
        }
        product.count = 1;
        this.products.push(product);
        this.missionAnnouncedSource.next();
        console.log(this.missionAnnouncedSource);
    };
    ShoppingCartService.prototype.remove = function (id) {
        this.products = this.products.filter(function (h) { return h.id !== id; });
    };
    ShoppingCartService.prototype.isEmpty = function () {
        return this.products.length === 0 ? true : false;
    };
    ShoppingCartService.prototype.get = function (id) {
        return this.products.find(function (product) { return product.id === id; });
    };
    ShoppingCartService.prototype.contains = function (id) {
        return this.products.find(function (product) { return product.id === id; }) ? true : false;
    };
    ShoppingCartService.prototype.increase = function (id) {
        this.get(id).count += 1;
        this.missionAnnouncedSource.next();
    };
    ShoppingCartService.prototype.decrease = function (id) {
        var product = this.get(id);
        if (--product.count == 0)
            this.remove(product.id);
        this.missionAnnouncedSource.next();
    };
    ShoppingCartService.prototype.getTotal = function () {
        this.itsTotal = 0;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            this.itsTotal += (product.price * product.count);
        }
        return this.itsTotal;
    };
    ShoppingCartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shoppingcart.service.js.map
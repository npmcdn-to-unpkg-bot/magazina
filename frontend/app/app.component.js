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
require('./rxjs-extensions');
var bagview_component_1 = require('./bagview/bagview.component');
var shoppingcart_service_1 = require('./shoppingcart.service');
var AppComponent = (function () {
    function AppComponent(shoppingcartService) {
        var _this = this;
        this.shoppingcartService = shoppingcartService;
        this.itsStartSearchLabel = false;
        this.shoppingcartService.productAdded$.subscribe(function () {
            if (_this.shoppingcartService.isEmpty())
                _this.componentState = 'in-one';
            else
                _this.componentState = 'in-twain';
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.componentState = (this.shoppingcartService.isEmpty() ? 'in-one' : 'in-twain');
    };
    AppComponent.prototype.goBack = function () {
        window.history.back();
    };
    AppComponent.prototype.startSearchLabel = function (inputElement) {
        inputElement.focus();
        this.itsStartSearchLabel = true;
    };
    AppComponent.prototype.showHideShoppingCart = function () {
        this.bagviewSwitch = !this.bagviewSwitch;
        this.bagview.bagviewSwitch = !this.bagview.bagviewSwitch;
    };
    __decorate([
        core_1.ViewChild(bagview_component_1.BagviewComponent), 
        __metadata('design:type', bagview_component_1.BagviewComponent)
    ], AppComponent.prototype, "bagview", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [bagview_component_1.BagviewComponent],
            animations: [
                core_1.trigger('componentState', [
                    core_1.state('in-one', core_1.style({ marginRight: '0px' })),
                    core_1.state('in-twain', core_1.style({ marginRight: '260px' })),
                    core_1.transition('in-one => in-twain', core_1.animate(100)),
                    core_1.transition('in-twain => in-one', core_1.animate(100)),
                ])
            ]
        }), 
        __metadata('design:paramtypes', [shoppingcart_service_1.ShoppingCartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
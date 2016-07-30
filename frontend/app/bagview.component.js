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
var bagviewComponent = (function () {
    function bagviewComponent() {
    }
    bagviewComponent.prototype.ngOnInit = function () {
        this.products = [
            { id: 1, name: '1' },
            { id: 1, name: '1' },
        ];
        $(".nano").nanoScroller();
    };
    bagviewComponent.prototype.delete = function (product) {
        this.products = this.products.filter(function (h) { return h !== product; });
    };
    bagviewComponent.prototype.showHideScrollbar = function (event) {
        if (event.type == 'mouseover') {
            document.body.style.overflow = "hidden";
            event.currentTarget.style.right = getScrollbarWidth() + "px";
        }
        else {
            document.body.style.overflow = "inherit";
            event.target.style.right = 0;
        }
    };
    bagviewComponent = __decorate([
        core_1.Component({
            selector: 'bagview',
            templateUrl: 'static/app/html/bagview.component.html',
            styleUrls: ['static/app/css/bagview.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [])
    ], bagviewComponent);
    return bagviewComponent;
}());
exports.bagviewComponent = bagviewComponent;
//# sourceMappingURL=bagview.component.js.map
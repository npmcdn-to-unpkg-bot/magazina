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
var search_service_1 = require('../search.service');
var bagview_component_1 = require('../bagview/bagview.component');
var shoppingcart_service_1 = require('../shoppingcart.service');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(route, searchService, shoppingcartService, elementRef, renderer) {
        this.route = route;
        this.searchService = searchService;
        this.shoppingcartService = shoppingcartService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.CLIENT_X = 0;
        this.OFFSET_X = 0;
        this.INDEX_OF_THE_CURRENT_SHOT = 0;
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
                    _this.product.snapshots = product.snapshots;
                    _this.full = true;
                }
                else {
                    _this.product = product;
                    _this.full = false;
                }
                _this.NUMBER_OF_SHOTS = Object.keys(_this.product.snapshots).length;
                // Загружаем 360view фотографии заменяя их строковое предстваление на Image объекты
                var img;
                for (var i in _this.product.snapshots) {
                    img = new Image();
                    img.src = _this.product.snapshots[i];
                    _this.product.snapshots[i] = img;
                }
                img = null;
                // Ожидаем загрузки первого изображения canvas360 и инициализируем его
                _this.renderer.listen(_this.product.snapshots[0], 'load', function (event) {
                    _this.canvas.setAttribute('width', _this.elementRef.nativeElement.offsetWidth);
                    _this.canvas.setAttribute('height', event.target.height);
                    _this.OFFSET_X = (_this.canvas.width / 2) - (event.target.width / 2);
                    _this.context.drawImage(_this.product.snapshots[0], _this.OFFSET_X, 0);
                });
            });
        });
    };
    ProductDetailComponent.prototype.ngAfterContentInit = function () {
    };
    ProductDetailComponent.prototype.ngAfterViewInit = function () {
        this.canvas = this.canvas.nativeElement;
        this.context = this.canvas.getContext('2d');
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
    ProductDetailComponent.prototype.canvasMouseDown = function () {
        var _this = this;
        this.canvasMouseDownListenFunc = this.renderer.listen(this.canvas, 'mousemove', function (event) {
            if (event.movementX > 0) {
                _this.INDEX_OF_THE_CURRENT_SHOT -= 1;
                if (_this.INDEX_OF_THE_CURRENT_SHOT < 0)
                    _this.INDEX_OF_THE_CURRENT_SHOT = _this.NUMBER_OF_SHOTS - 1;
            }
            else {
                _this.INDEX_OF_THE_CURRENT_SHOT += 1;
                if (_this.INDEX_OF_THE_CURRENT_SHOT == _this.NUMBER_OF_SHOTS)
                    _this.INDEX_OF_THE_CURRENT_SHOT = 0;
            }
            _this.CLIENT_X = event.clientX;
            _this.context.drawImage(_this.product.snapshots[_this.INDEX_OF_THE_CURRENT_SHOT], _this.OFFSET_X, 0);
        });
    };
    ProductDetailComponent.prototype.canvasMouseUp = function () {
        if (this.canvasMouseDownListenFunc)
            this.canvasMouseDownListenFunc();
    };
    __decorate([
        core_1.ViewChild(bagview_component_1.BagviewComponent), 
        __metadata('design:type', bagview_component_1.BagviewComponent)
    ], ProductDetailComponent.prototype, "bagview", void 0);
    __decorate([
        core_1.ViewChild('canvas'), 
        __metadata('design:type', Object)
    ], ProductDetailComponent.prototype, "canvas", void 0);
    ProductDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-product-detail',
            templateUrl: 'product-detail.component.html',
            styleUrls: ['product-detail.component.css'],
            providers: [search_service_1.SearchService],
            directives: [bagview_component_1.BagviewComponent]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, search_service_1.SearchService, shoppingcart_service_1.ShoppingCartService, core_1.ElementRef, core_1.Renderer])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map
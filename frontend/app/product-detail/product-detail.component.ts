import { Component, EventEmitter, OnInit, OnDestroy, ViewChild, AfterViewInit, AfterContentInit, ElementRef, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { SearchService } from '../search.service';
import { ShoppingCartService } from '../shoppingcart.service';


@Component({
    moduleId: module.id,
    selector: 'my-product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css'],
    providers: [SearchService]
})


export class ProductDetailComponent implements OnInit, AfterViewInit, AfterContentInit {

    @ViewChild('canvas') canvas;
    product: Product;
    
    /* Canvas properties */
    context: Object;
    CLIENT_X: number = 0;
    OFFSET_X: number = 0;
    NUMBER_OF_SHOTS: number;
    canvasMouseDownListenFunc: Function;
    INDEX_OF_THE_CURRENT_SHOT: number = 0;
a;
    constructor(
        private route: ActivatedRoute,
        private searchService: SearchService,
        private shoppingCartService: ShoppingCartService,
        private elementRef: ElementRef,
        private renderer: Renderer) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id'] === undefined)  return true;
            let id = +params['id'];

            this.searchService.getProduct(id).then(product => {

                if (this.shoppingCartService.contains(product.id)) {
                    this.product = this.shoppingCartService.get(product.id);
                    this.product.snapshots = product.snapshots;


                }
                else {
                    this.product = product;
                  this.product.meta = product
                }



                this.NUMBER_OF_SHOTS = Object.keys(this.product.snapshots).length;

                // Загружаем 360view фотографии заменяя их строковое предстваление на Image объекты
                let img;
                for (let i in this.product.snapshots) {
                    img =  new Image();
                    img.src = this.product.snapshots[i];
                    this.product.snapshots[i] = img;
                }

                // Ожидаем загрузки первого изображения canvas360 и инициализируем его
                this.renderer.listen(this.product.snapshots[0], 'load', (event) => {
                    this.canvas.setAttribute('width', this.elementRef.nativeElement.offsetWidth);
                    this.canvas.setAttribute('height', event.target.height);

                    this.OFFSET_X = (this.canvas.width / 2) - (event.target.width / 2);
                    this.context.drawImage( this.product.snapshots[0], this.OFFSET_X, 0 );
                });
            });
        });

    }

    ngAfterContentInit(){

    }

    ngAfterViewInit() {
        this.canvas = this.canvas.nativeElement;
        this.context = this.canvas.getContext('2d');
    }

    addToShoppingCart() {
      this.shoppingCartService.add(this.product);
      this.a = this.product.meta.step * 1;
    }

    changeCount(){

    }

    increase() {
        this.shoppingCartService.increase(this.product.id);
        this.a = this.product.meta.step * this.product.count;
    }

    decrease() {
        this.shoppingCartService.decrease(this.product.id);
    }

    canvasMouseDown() {
        this.canvasMouseDownListenFunc = this.renderer.listen(this.canvas, 'mousemove', (event) => {
            if (event.movementX > 0) {  //event.clientX > this.CLIENT_X
                this.INDEX_OF_THE_CURRENT_SHOT -= 1;

                if (this.INDEX_OF_THE_CURRENT_SHOT < 0)
                    this.INDEX_OF_THE_CURRENT_SHOT = this.NUMBER_OF_SHOTS - 1;
            }
            else {
                this.INDEX_OF_THE_CURRENT_SHOT += 1;

                if (this.INDEX_OF_THE_CURRENT_SHOT == this.NUMBER_OF_SHOTS)
                    this.INDEX_OF_THE_CURRENT_SHOT = 0;
            }

            this.CLIENT_X = event.clientX;
            this.context.drawImage( this.product.snapshots[this.INDEX_OF_THE_CURRENT_SHOT], this.OFFSET_X, 0 );
        });
    }
    
    canvasMouseUp() {
        if (this.canvasMouseDownListenFunc)
            this.canvasMouseDownListenFunc()
    }
}

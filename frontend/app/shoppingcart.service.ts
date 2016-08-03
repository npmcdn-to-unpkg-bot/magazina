import { Injectable } from '@angular/core'
import { LocalStorage } from "angular2-localstorage/WebStorage";
import { Product } from './product';

@Injectable()
export class ShoppingCartService {
    @LocalStorage() private products: Object[] = [];
    private itsTotal: number;

    constructor() {}
    
    getProducts(){
        return this.products;
    }

    add(product: Product) {
        if (this.contains(product.id)) {
            console.error("ShoppingCartService.add(): Товар имеется в корзине!");
            return false;
        }

        product.count = 1;
        this.products.push(product);
    }
    
    remove(id: number) {
        this.products = this.products.filter(h => h.id !== id);
        this.recalculate();
    }

    isEmpty(): boolean {
        return this.products.length === 0 ? true : false;
    }

    recalculate() {

    }
    
    get(id: number) {
        return this.products.find(product => product.id === id)
    }

    contains(id: number) {
        return this.products.find(product => product.id === id) ? true : false;
    }
    
    // count() {
    //     return this.products.length;
    // }

    increase(id: number) {
        this.get(id).count += 1;
    }

    decrease(id: number) {
        let product = this.get(id);
        product.count -= 1;
        if (product.count === 0) this.remove(product.id);
    }
    
    getTotal() {
        this.itsTotal = 0;

        for (let product of this.products) {
            this.itsTotal += (product.price * product.count);
        }
        return this.itsTotal;
    }
}
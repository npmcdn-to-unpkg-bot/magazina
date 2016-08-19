import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';

import { Product } from './product';
import { LocalStorage } from 'angular2-localstorage/WebStorage';

@Injectable()
export class ShoppingCartService {
    private products: Object[] = [];
    private itsTotal: number;

    private missionAnnouncedSource = new Subject<Object>();
    productAdded$ = this.missionAnnouncedSource.asObservable();
    
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
        this.missionAnnouncedSource.next();

        console.log(this.missionAnnouncedSource);
    }
    
    remove(id: number) {
        this.products = this.products.filter(h => h.id !== id);
    }

    isEmpty(): boolean {
        return this.products.length === 0 ? true : false;
    }
    
    get(id: number) {
        return this.products.find(product => product.id === id)
    }

    contains(id: number) {
        return this.products.find(product => product.id === id) ? true : false;
    }

    increase(id: number) {
        this.get(id).count += 1;
        this.missionAnnouncedSource.next();
    }

    decrease(id: number) {
        let product = this.get(id);
        if ( --product.count == 0 ) this.remove(product.id);
        this.missionAnnouncedSource.next();
    }
    
    getTotal() {
        this.itsTotal = 0;
        for (let product of this.products) {
            this.itsTotal += (product.price * product.count);
        }
        return this.itsTotal;
    }
}
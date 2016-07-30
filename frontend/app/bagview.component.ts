import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'bagview',
    templateUrl: 'static/app/html/bagview.component.html',
    styleUrls: ['static/app/css/bagview.component.css'],
    directives: [ROUTER_DIRECTIVES],
})

export class bagviewComponent implements OnInit {
    products: Object[];

    ngOnInit() {
        this.products = [
            {id: 1, name: '1'},
            {id: 1, name: '1'},

        ];

        $(".nano").nanoScroller();
    }

    delete(product) {
        this.products = this.products.filter(h => h !== product);
    }

    showHideScrollbar(event) {
        if (event.type == 'mouseover') {
            document.body.style.overflow = "hidden";
            event.currentTarget.style.right = getScrollbarWidth() + "px";
        }
        else {
            document.body.style.overflow = "inherit";
            event.target.style.right = 0;
        }
    }
}

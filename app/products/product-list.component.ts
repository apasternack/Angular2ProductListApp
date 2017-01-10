import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    sortDescendingOrder: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {



    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    toggleSortOrder(): void {

        if (this.sortDescendingOrder) this.products.sort(sortAZ);
        else this.products.sort(sortZA);

        this.sortDescendingOrder = !this.sortDescendingOrder;

        function sortZA(b: IProduct, a: IProduct) {
            if (a.productName < b.productName)
                return -1;
            if (a.productName > b.productName)
                return 1;
            return 0;
        }
        function sortAZ(a: IProduct, b: IProduct) {
            if (a.productName < b.productName)
                return -1;
            if (a.productName > b.productName)
                return 1;
            return 0;
        }

    }
    ngOnInit(): void {

        this._productService.getProducts()
                .subscribe(
                    products => this.products = products,
                    error => this.errorMessage = <any>error
                );

        function sortAZ(a: IProduct, b: IProduct) {
            if (a.productName < b.productName)
                return -1;
            if (a.productName > b.productName)
                return 1;
            return 0;
        }

        // this.products.sort(sortAZ);

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

}

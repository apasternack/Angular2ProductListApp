import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';


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
    listFilter: string = 'cart';
    products: IProduct[] = [  // in many cases here we would communicate with a backend server
        {
            "productId": 5,
            "productName": "Wammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 2.5,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 7,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 17,
            "productName": "10cade",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "productId": 87,
            "productName": "2moo",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
    ];
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


        function sortAZ(a: IProduct, b: IProduct) {
            if (a.productName < b.productName)
                return -1;
            if (a.productName > b.productName)
                return 1;
            return 0;
        }

        this.products.sort(sortAZ);

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

}

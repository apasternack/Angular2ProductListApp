import { Component } from '@angular/core';

import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-details.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;
}

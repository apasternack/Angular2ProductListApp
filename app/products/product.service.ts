import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    // this is a mock of a web server endpoint,substitute one here and the rest of the setup works just so
    private _productUrl = 'api/products/products.json';
    constructor(private _http: Http){


    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json());
    }
}

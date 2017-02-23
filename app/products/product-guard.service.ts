import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router: Router) {
        
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;  // the '+' converts the id number in the url from a string to a number
        if (isNaN(id) || id < 1) {
            alert('Invalid product Id');  //in a real app do something more UX saavy than alert, like modal or error page with instructions how to proceed
            //start a ew navigation to redirect to list page
            this._router.navigate(['/products']);
            // abort current navigation
            return false;
        }
        
        return true;
    }

}
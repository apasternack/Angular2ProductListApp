import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ProductDetailGuard } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';




@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [
        FormsModule,   // added to accomodate use of ngModel for two way binding
        CommonModule,
        RouterModule.forChild([
                  { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductDetailGuard ],
        component: ProductDetailComponent },
        ])
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {}
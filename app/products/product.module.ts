import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailGuard } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule {}
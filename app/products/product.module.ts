import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';




@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule
    ]
})
export class ProductModule {}
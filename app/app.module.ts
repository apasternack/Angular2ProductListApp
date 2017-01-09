import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule // added to accomodate use of ngModel for two way binding
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


//(click)='sortAZ()'
//    private userGroups: IUserGroup[] = [];

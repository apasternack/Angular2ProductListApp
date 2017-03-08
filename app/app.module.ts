import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './shared/app-routing.module';
import { ProductRoutingModule } from './shared/product-routing.module';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ProductModule,
    AppRoutingModule,
    ProductRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


//(click)='sortAZ()'
//    private userGroups: IUserGroup[] = [];

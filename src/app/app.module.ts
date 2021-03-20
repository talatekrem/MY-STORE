import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { ProductAlertComponent } from './product/components/product-alert/product-alert.component';
import { CheckoutListComponent } from './checkout/components/checkout-list/checkout-list.component';
import { PaymentComponent } from './checkout/components/payment/payment.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing.module';
import {ProductService} from './product/service/product.service';
import {NotFoundPageComponent} from './product/components/404-page/404-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    CheckoutListComponent,
    PaymentComponent,
    ProductDetailComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    RentalComponent,
    CustomerComponent,
    CardetailComponent,
    VatAddedPipe,
    FilterCarPipe,
    FilterBrandPipe,
    CartSummaryComponent,
    FilterColorPipe,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

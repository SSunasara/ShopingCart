import { SharedModule } from './../../shared/shared.module';
import { CartService } from './../services/cart.service';
import { ProductService } from './../product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    CustomerComponent, 
    ProductlistComponent, 
    ProductdetailComponent, 
    NavbarComponent, CartComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ProductService,
    CartService
  ]
})
export class CustomerModule { }

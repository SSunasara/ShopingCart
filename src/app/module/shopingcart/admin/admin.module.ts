import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../product/product.service';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AddproductComponent, 
    ListproductComponent, 
    EditproductComponent, 
    NavbarComponent, 
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    ProductService
  ]
})
export class AdminModule { }

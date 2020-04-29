import { CartComponent } from './cart/cart.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CustomerComponent } from './customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'list', component: ProductlistComponent},
      { path: 'cart', component: CartComponent},
      { path: 'detail/:id', component: ProductdetailComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

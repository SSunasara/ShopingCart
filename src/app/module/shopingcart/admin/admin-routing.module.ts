import { AdminComponent } from './admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductComponent } from './listproduct/listproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';


const routes: Routes = [
  {
    path: '', 
    component: AdminComponent,
    children: [
      { path : 'list', component: ListproductComponent},
      { path : 'add', component: AddproductComponent},
      { path : 'edit/:id', component: EditproductComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

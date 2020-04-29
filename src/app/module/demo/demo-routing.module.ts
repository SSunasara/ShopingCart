import { DemoComponent } from './demo.component';
import { PipeComponent } from './pipe/pipe.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';


const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      { path : 'databinding', component: DataBindingComponent},
      { path : 'directive', component: DirectiveDemoComponent},
      { path : 'pipe', component: PipeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }

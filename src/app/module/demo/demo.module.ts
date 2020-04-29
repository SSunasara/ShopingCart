import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './../shared/shared.module';
import { AppModule } from './../../app.module';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipeComponent } from './pipe/pipe.component';


@NgModule({
  declarations: [
    DemoComponent,
    DataBindingComponent,
    DirectiveDemoComponent,
    PipeComponent
  ],
  imports: [
    DemoRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule { }

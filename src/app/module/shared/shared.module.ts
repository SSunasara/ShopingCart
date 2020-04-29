import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenotfoundPipe } from './pipe/imagenotfound.pipe';
import { TextformattingDirective } from './directive/textformatting.directive';



@NgModule({
  declarations: [
    ImagenotfoundPipe,
    TextformattingDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagenotfoundPipe,
    TextformattingDirective
  ]
})
export class SharedModule { }

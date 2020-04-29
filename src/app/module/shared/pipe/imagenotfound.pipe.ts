import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenotfound'
})
export class ImagenotfoundPipe implements PipeTransform {

  transform(value: string): string {
    let image = "./assets/tenor.gif";
    if(value)
      image = value;
    return image;
  }

}

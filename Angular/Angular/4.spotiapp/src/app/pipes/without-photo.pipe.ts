import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutPhoto'
})
export class WithoutPhotoPipe implements PipeTransform {

  transform(images: any[], numberImage): any {
    let noImage = 'assets/img/noimage.png';
    if(!images){
      return noImage;
    }

    return images.length > numberImage ? images[numberImage].url : noImage;
  }
}

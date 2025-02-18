import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
  standalone: false
})
export class ImageUrlPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('node_modules/place-my-order-assets', './assets');
  }

}
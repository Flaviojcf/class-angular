import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../services/order/order.service';

@Pipe({
  name: 'itemTotal',
  standalone: false,
})
export class ItemTotalPipe implements PipeTransform {
  transform(items: Item[]): number {
    let itemTotal = 0.0;
    if (items.length) {
      for (const item of items) {
        itemTotal += item.price;
      }
      return Math.round(itemTotal * 100) / 100;
    }
    return itemTotal;
  }
}

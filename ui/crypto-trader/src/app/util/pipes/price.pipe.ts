import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): number {
    if (value > 100) {
      return Math.round(value)
    } else if (value < 10 && value > 0) {
      return Math.round(value * 100)/100
    } else {
      return Math.round(value * 10)/10;
    }
  }

}

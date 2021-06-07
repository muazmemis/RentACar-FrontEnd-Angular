import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Car[], filterCarName: string): Car[] {
    return null;
  }
}

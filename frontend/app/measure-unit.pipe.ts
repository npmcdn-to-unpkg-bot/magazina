import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'measureUnit'})
export class MeasureUnitPipe implements PipeTransform {
  transform(count: number, step: number): string {
    if (step) {
      let i = count * step / 1000;
      if (i < 1) return `${count * step} гр.`;
      else return `${i} кг.`;
    }
    else {
      return `${count} шт.`;
    }
  }
}
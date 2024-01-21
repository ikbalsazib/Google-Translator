import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate',
})
export class ConvertDatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return new Date(value);
  }
}

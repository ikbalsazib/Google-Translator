import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numMinDigit',
  pure: true
})
export class NumberMinDigitPipe implements PipeTransform {

  transform(n: number, needZero?: boolean): string {
    if (n < 10) {
      return needZero ? ('0' + n) : ('' + n);
    } else if (n < 100) {
      return '' + n;
    } else {
      return needZero ? '00' : '0';
    }
  }

}

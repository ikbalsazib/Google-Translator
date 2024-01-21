import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousandFormat',
})
export class ThousandFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || isNaN(value)) {
      console.log('transform', value);
      return 'N/A'; // or any default value you prefer
    }

    if (value < 1000) {
      console.log('transform', value);

      return value.toString();
    }

    const suffixes = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    const exponent = Math.floor(Math.log10(value) / 3);
    const convertedValue = value / Math.pow(10, exponent * 3);

    console.log('transform', convertedValue.toFixed(2) + suffixes[exponent]);

    return convertedValue.toFixed(2) + suffixes[exponent];
  }
}

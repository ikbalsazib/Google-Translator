import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConvertDatePipe } from './convert-date.pipe';
import { NumberMinDigitPipe } from './number-min-digit.pipe';
import { ThousandFormatPipe } from './thousand-format.pipe';
import { SalaryComparisonPipe } from './salary-comparision.pipe';
import { LanguagePipe } from './language.pipe';

@NgModule({
  declarations: [
    NumberMinDigitPipe,
    ConvertDatePipe,
    ThousandFormatPipe,
    SalaryComparisonPipe,
    LanguagePipe,
  ],
  imports: [CommonModule],
  exports: [
    NumberMinDigitPipe,
    ConvertDatePipe,
    ThousandFormatPipe,
    SalaryComparisonPipe,
    LanguagePipe,
  ],
})
export class PipesModule {}

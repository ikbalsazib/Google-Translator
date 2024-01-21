// salary-comparison.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryComparison',
})
export class SalaryComparisonPipe implements PipeTransform {
  transform(totalSalary: string, budgetedSalary: string): boolean {
    const totalSalaryNumeric = this.convertSalaryToNumber(totalSalary);
    const budgetedSalaryNumeric = this.convertSalaryToNumber(budgetedSalary);

    return totalSalaryNumeric < budgetedSalaryNumeric;
  }

  private convertSalaryToNumber(salary: string): number {
    const numericPart = parseInt(salary);
    const multiplier = salary.includes('M')
      ? 1000000
      : salary.includes('K')
      ? 1000
      : 1;

    return numericPart * multiplier;
  }
}

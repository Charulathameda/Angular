import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(
    array: any[],field: string,order: boolean = true // true = ascending, false = descending
  ): any[] {

    if (!Array.isArray(array) || !field) {
      return array;
    }

    return [...array].sort((a, b) => {
      const valA = a[field];
      const valB = b[field];

      if (valA < valB) return order ? -1 : 1;
      if (valA > valB) return order ? 1 : -1;
      return 0;
    });
  }
}

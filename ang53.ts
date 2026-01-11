import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value || typeof value !== 'string') {
      return '';
    }

    return value.split('').reverse().join('');
  }

}

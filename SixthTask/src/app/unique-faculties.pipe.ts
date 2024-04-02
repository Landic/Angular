import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueFaculties'
})
export class UniqueFacultiesPipe implements PipeTransform {

  transform(value: string[]): string[] {
    return [...new Set(value)];
  }

}

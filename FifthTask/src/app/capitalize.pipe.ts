import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(str: string){
    if (!str) 
      return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

}
